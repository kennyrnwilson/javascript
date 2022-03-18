// Slice does not modify the original array

let a1 = [1,2,3,4,5];
let a2 = a1.slice(2,4);
console.log(a1);             // [1,2,3,4,5]
console.log(a2);             // [3,4]

let a3 = a1.slice(2);
console.log(a3);            // [3,4,5] 

let a4 = a1.slice(-1);
console.log(a4);            // [5] 

let a5 = a1.slice(-3, -1);
console.log(a5);            // [3,4] 