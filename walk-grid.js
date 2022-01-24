//get array from grid object
function walkGrid(grid, reverseIfOdd = true){
    let array = [];
    Object.keys(grid.rows).forEach(row => {
        if(row % 2 == 0){
            array = array.concat(grid.rows[row]);
        } else {
            let reverseRow = reverseIfOdd ? grid.rows[row].reverse() : grid.rows[row];
            array = array.concat(reverseRow);
        }
    });
    let finalArray = [];
    array.forEach(element => {
        if(element !== undefined){
            finalArray.push(element);
        }
    });
    return finalArray;
}

module.exports = {
    walkGrid
}