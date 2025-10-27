const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

//Slice And Splice

console.log("A", myArr);
console.log("Original Array Printed Above");

const myn1 = myArr.slice(0,3)
console.log("B", myArr);
console.log(myn1);
console.log("Sliced Result Above");


const myn2 = myArr.splice(0,3)
console.log("C", myArr);
console.log(myn2);
console.log("Spliced Result Above");


