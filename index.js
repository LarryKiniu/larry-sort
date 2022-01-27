let Grid = require('./grid');
let sortGrid = require('./sort-grid').sortGrid;
let walkGrid = require('./walk-grid').walkGrid;

function memoize(memo,array,sortedArray){
    let key = array.join('-');
    memo[key] = sortedArray;
    return memo;
}

function sort(array, memo = {}){
    let key = array.join('-');
    if(memo[key]){
        return memo[key];
    }
    let grid = new Grid(array);
    if(grid.width === 2){
        let sortedGridArray = walkGrid(sortGrid(grid));
        return sortedGridArray;
    }
    let counter = 0;
    while(counter <= grid.width){
        // sort rows
        Object.keys(grid.rows).forEach( row => {
            if(row % 2 == 0){
                grid.rows[row] = sort(grid.rows[row]);
            } else {
                grid.rows[row] = sort(grid.rows[row]).reverse();
            }
            //console.log('grid row', row, grid.rows[row])
        });

        counter++;

        // sort columns
        let sortedColumns = [];
        
        for(let i = 0; i < grid.length; i++){
            let unSortedColumn = grid.getColumn(i);
            //console.log('column', i, unSortedColumn)
            let soretdColumn = sort(unSortedColumn);
            //console.log('sortedColumn', soretdColumn);
            sortedColumns.push(soretdColumn);
        }
        grid.setRowsFromColumns(sortedColumns);
        counter++;
    }
    let sortedArray = walkGrid(grid);
    memoize(memo, array, sortedArray);
    return sortedArray;
}

module.exports = sort;