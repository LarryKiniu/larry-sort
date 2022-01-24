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

// let numbers0 = [13,1,90,102,4,7,4,59,100,201,3,77,20,62];
// let numbers1 = [593,793,623,26,1990,31,27,16,6];
// let numbers2 = [34,56,25,67,9];
// let numbers3 = [3,30,0,100,33,27,4,58,70,10,9,101,17,82,16,22,76];
// let numbers4 = [2,6,4,14,11,13,7,16,5,9,1,10,8,12,3,15];

// // sort the myArray of numbers 
// console.log('numbers0',walkGrid(sort(numbers0)));
// console.log('numbers1',walkGrid(sort(numbers1)));
// console.log('numbers2',walkGrid(sort(numbers2)));
// console.log('numbers3',walkGrid(sort(numbers3)));
// console.log('numbers4',walkGrid(sort(numbers4)));

module.exports = {
    sort: sortArray
}