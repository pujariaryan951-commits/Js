//Number and Maths in Javascript

const score = 400 // JS auto detects it as a number
const balance = new Number(100) // Using Number Function to explicitly define number in JS
console.log(score) // 400
console.log(balance) // [Number: 100]

//Note: Number has comparatively less prototype properties (methods) than String

//Methods with examples:
 balance.toString() // This converts a number into string
 balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
 balance.toFixed(2) // Used to reduce or round of to specific decimal values
    /* - Use Cases 
        a. After calculation of GST
        b. In Ecommerce website
*/
    otherNumber = 23.8966
    otherNumber.toPrecision(3) // Output - 23.9
    otherNumber = 123.8966
    otherNumber.toPrecision(3) // Output - 124    
    otherNumber = 1123.8966
    otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)

 const hundreds = 1000000
    console.log(hundreds.toLocaleString()); // By default it converts into US standards
    console.log(hundreds.toLocaleString('en-IN')); // As per Indian Standards
 //   (Note: Check other formats in MDN Docs)

/* Other methods
    .MAX_VALUE
    .MIN_VALUE
    .MAX_SAFE_INTEGER
    .MIN_SAFE_INTEGER
*/
//----- Maths in JS ----
//Maths library comes along with JS

/*Methods ----
1. Math.abs() // Converts +ve / -ve integer values to positive
2. Math.round(4.3) // Output - 4
3. Math.round(4.6) // Output - 5
4. Math.ceil(4.2) // Output - 5 (gives top value)
5. Math.floor(4.9) // Output - 4 (gives bottom value)
6. Math.min(4,3,6,8) // Output - 3
7. Math.max(4,3,6,8) // Output - 8
8. Math.random() // Gives random value between 0 & 1 in decimals
*/
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);



//---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.round((Math.random() * (max - min + 1)) + min)
console.log(randomValue);
