// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

mostFrequentChar = function(string){
    let arr = string.split("")

    let letters = arr.reduce((acumulator, index)=>{
        if(!acumulator[index]){
            acumulator[index] = 1
        }else{
            acumulator[index] +=1
        }
        return acumulator
    }, {})

    return Object.keys(letters).reduce((a, b) => letters[a] > letters[b] ? a : b)
}

console.log(mostFrequentChar("Hellooo")); // Expected output: "a"