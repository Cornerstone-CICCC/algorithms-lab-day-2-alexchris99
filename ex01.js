// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function(string){
    let newString = string.split(" ")
    let stringFinal = ""
    for(let i = 0; i < newString.length; i++){
        stringFinal +=  newString[i][0].toUpperCase() + newString[i].slice(1)  + " "
    }
    return stringFinal
}

console.log(capitalizeWords("how are you")); // Expected output: "Hello World"
