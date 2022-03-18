//---------------------------------------------------
// Destructuring
//---------------------------------------------------

// Basic Array Destructure
let [a,b,c] = [1,2,3];

// Destruct function that returns an array
let [x,y] = (() => [3.2,5.6])();

// Deconstruct array with more values than we need
let [x1,y1] = [10,11,12,14]; // x1 = 10, y1=11

// Deconstruct array with more values and choose which we want
let [,x2,,y2] = [10,11,12,14]; // x2 = 11, y2=14

// Deconstruct any remaing values into array
let [x3,...ar] = [10,11,12,14]; // ar = [11,12,14]

// Destructure an object
let o1 = {
    a1: 1,
    b1:2,
    c1:3
};

let {
    a1,
    c1
} = o1;
