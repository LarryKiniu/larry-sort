let Grid = require('./grid');
let sortGrid = require('./sort-grid').sortGrid;
let walkGrid = require('./walk-grid').walkGrid;

function sort(array){
    let grid = new Grid(array);
    if(grid.width === 2){
        let sortedGrid = sortGrid(grid);
        return sortedGrid;
    }
    let counter = 0;
    while(counter <= grid.width){
        // sort rows
        Object.keys(grid.rows).forEach( row => {
            if(row % 2 == 0){
                grid.rows[row] = walkGrid(sort(grid.rows[row]));
            } else {
                grid.rows[row] = walkGrid(sort(grid.rows[row])).reverse();
            }
            //console.log('grid row', row, grid.rows[row])
        });
        // sort columns
        let columns = [];
        
        for(let i = 0; i < grid.length; i++){
            //console.log('column', i, grid.getColumn(i))
            let column = walkGrid(sort(grid.getColumn(i)));
            //console.log('sortedColumn', column);
            columns.push(column);
        }
        grid.setRowsFromColumns(columns);
        counter++;
    }
    return grid;
}

function sortArray(array){
    return walkGrid(sort(array))
}

module.exports = {
    sort: sortArray
}