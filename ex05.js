// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.
const countConsonants = function(string){
    let newString = string.split(" ")
    newString = newString.join("")
    newString = newString.toLowerCase()
    newString = newString.split("")

    let consonats = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let counter = 0
    for(let i = 0; i < newString.length; i++){
        for(let j = 0; j < consonats.length; j++){
            if(newString[i] == consonats[j]){
                counter += 1
            }
        }
    }
    return counter
}

console.log(countConsonants("hello world Hi")); // Expected output: 7