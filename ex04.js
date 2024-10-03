// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function(string){
    let arr = string.split("")

    let FrequentChar = ''
    let letters = arr.reduce((acumulator, index)=>{
        if(!acumulator[index]){
            acumulator[index] = 1
        }else{
            acumulator[index] +=1
            if(FrequentChar < acumulator[index]){
                FrequentChar = index
            }
        }
        return acumulator
    }, {})

    return FrequentChar
}

console.log(mostFrequentChar("horripilante")); // Expected output: "a"