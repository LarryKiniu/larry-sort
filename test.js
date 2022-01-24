let sort = require('./index').sort;
let unsortedArray = [13,1,90,102,4,7,4,59,100,201,3,77,20,62];
let sortedArray = sort(unsortedArray);
console.log(sortedArray); //[1,3,4,4,7,13,20,59,62,77,90,100,102,201]