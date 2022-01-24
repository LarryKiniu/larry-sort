//sort a 2x2 grid
function sortGrid(grid){
    let i = 0;
    while(i <= grid.length){
        // sort rows
        let row0 = grid.getRow(0);
        let row1 = grid.getRow(1);
        if(row0[0] > row0[1] || row0[0] == undefined){
            let first = row0[1];
            let second = row0[0];
            grid.setRow(0,[first,second]);
        }
        if(row1[1] > row1[0] || row1[1] === undefined){
            let first = row1[0];
            let second = row1[1];
            grid.setRow(1,[second,first]);
        }

        //sort columns
        let column0 = grid.getColumn(0);
        let column1 = grid.getColumn(1);
        if(column0[0] > column0[1] || column0[0] === undefined){
            let first = column0[1];
            let second = column0[0];
            column0 = [first,second];
        }
        if(column1[0] > column1[1] || column1[0] === undefined){
            let first = column1[1];
            let second = column1[0];
            column1 = [first,second];
        }

        grid.setRowsFromColumns([column0,column1]);
        i++;
    }
    return grid;
}
module.exports = {
    sortGrid
}