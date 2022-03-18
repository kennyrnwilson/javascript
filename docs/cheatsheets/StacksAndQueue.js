// pop removes the last element and return it
let a = [1,2,3];
console.log(a.pop());  // 3
console.log(a);        // [1,2]

// push adds to the end of the array
let a1 = [1,2,3];
console.log(a1.push(4));  // 4
console.log(a1);          // [1,2,3,4]

// shift removes and returns the first element
let a2 = [1,2,3];
console.log(a2.shift());  // 1
console.log(a2);          // [2,3]

// unshift appends to the front of the array
let a3 = [1,2,3];
console.log(a3.unshift(4));  // 4
console.log(a3);             // [4,1,2,3]