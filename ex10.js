// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = function(string){
    let camelCase = string.split(/_|" "/)
    let res = ""
    for(let i = 0; i < camelCase.length; i++){
        if(i == 0){
            res += camelCase[i]
        }else{
            res += camelCase[i][0].toUpperCase() + camelCase[i].slice(1)
        }
    }
    return res
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"