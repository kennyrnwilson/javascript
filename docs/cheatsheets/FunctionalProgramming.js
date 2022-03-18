// every
var r1 = [1,3,5].every( x => x % 2 === 1); // r1 = true

// some 
var r2 = [1,2].some( x => x % 2 === 1); // r2 = true

// filter
var r3 = [1,2,3,5].filter( x => x % 2 === 1); // r3 = [1,3,5]

// find 
 var r4 = [1,2,3,4].find(x => x%2 === 0); // r4 = 2

 // findIndex 
 var r5 = [1,2,3,4].findIndex(x => x%2 === 0); // r5 = 1

 // map
 var r6 = [1,2].map(x=>x*2); // r6 = [2,4]

 // reduce (Also known as inject or fold)
 var r7 = [1,2, 3].reduce( (acc,curr) => acc + curr,0); // r7 = 6

 // reduceRight works from right to left
 var r8 = [2,3].reduceRight( (acc,curr) => Math.pow(acc,curr)); // r8 = 9

 // flat flattens any elements that are arrays
 var r9 = [1,2,[3,4],[5,6]].flat() ; // r9 = [1,2,3,4,5,6]


