/*
Two main types of datatypes
1.Primitive (7 types)
 String
 Number
 Boolean
 null
 undefined
 Symbol
 BigInt

2.Reference Type Or Non-Primitive
 Array
 Objects
 Functions

Js is a dynamically typed language (datatype is not needed to be specified)
*/

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //both ids are not equal

const bigNumber = 123456789123n //bigInt

//Object : datatype is known as object
const heros = ["shaktimaan", "naagraj", "doga"];
let info = {
    name: "Aryan",
    age: 20,
}

//function : datatype is known as object function
const myFunction = function(){
    console.log("Hello World");
    
}