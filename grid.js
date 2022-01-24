class Grid {
    constructor(array){
        this.width = Math.ceil(Math.sqrt(array.length));
        this.length = Math.ceil(Math.sqrt(array.length));
        this.rows = {};
        this.setRowsFromArray(array);
    }
    setRowsFromArray(array){
        let rowCounter = 0;
        let arrayIndex = 0;
        while(rowCounter < this.length){
            let length = arrayIndex + this.length;
            for(let i = arrayIndex; i < length; i++){
                if(!this.rows[rowCounter]){
                    this.rows[rowCounter] = [];
                }
                this.rows[rowCounter].push(array[i]);
                arrayIndex = i + 1;
            }
            rowCounter++;
        }
    }
    setRow(index, row){
        this.rows[index] = row;
    }
    getRow(index){
        return this.rows[index];
    }
    getColumn(index){
        let column = [];
        Object.keys(this.rows).forEach(row => {
            if(this.rows[row].length < this.length){
                this.rows[row].unshift(undefined);
            }
            column.push(this.rows[row][index])
        });
        return column;
    }
    setRowsFromColumns(columns){
        let rows = {};
        for(let i=0; i< columns.length; i++){
            if(!rows[i]){
                rows[i] = [];
            }
            columns.forEach( column => {
                rows[i].push(column[i])
            });
        }
        this.rows = rows;
    }
}

module.exports = Grid;