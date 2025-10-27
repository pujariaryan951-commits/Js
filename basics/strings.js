const name = "Aryan"
const repoCount = 1

console.log(name + repoCount + " Value"); //Not recommended

//The Below Method Is Recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Aryan")

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

//String Slice

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-2,4)
console.log(anotherString);

//trim is used to remove extra spaces
const newStringOne = "   Aryan   "
console.log(newStringOne);
console.log(newStringOne.trim());

