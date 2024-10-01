// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = function(string, word){
    let text = string.split(" ")
    count = 0
    for(let i = 0; i < text.length; i++){
        if(text[i] == word){
            count +=1
        }
    }
    return count
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2