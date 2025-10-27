//stack is used by primitive datatype

let myYoutubeName = "InfamousGamer"

let anotherName = myYoutubeName
anotherName = "JabbaGMR"

//in purely stack the copy is sent to anotherName so it doesnt change the original myYoutubeName
console.log(myYoutubeName);
console.log(anotherName);

//heap is used by non primitive datatype

let userOne = {
    mail: "aryan@google.com",
    upi: "aryan@ybl"
}

let userTwo = userOne

userTwo.mail = "user@google.com"

//In heap both the memory get changed
console.log(userOne);
console.log(userTwo);
