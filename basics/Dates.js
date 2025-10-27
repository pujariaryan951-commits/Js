// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) 
console.log(myDate.toString()) 

console.log(myDate.toLocaleString()) 
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString()) 

console.log(myDate.toDateString()) 
console.log(myDate.toTimeString()) 

console.log(myDate.toISOString()) 
console.log(myDate.toJSON())

/*Output
2025-10-27T16:40:22.934Z
Mon Oct 27 2025 16:40:22 GMT+0000 (Coordinated Universal Time)
10/27/2025, 4:40:22 PM
10/27/2025
4:40:22 PM
Mon Oct 27 2025
16:40:22 GMT+0000 (Coordinated Universal Time)
2025-10-27T16:40:22.934Z
2025-10-27T16:40:22.934Z
*/ 