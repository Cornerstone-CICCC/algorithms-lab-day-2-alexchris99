// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function(arr){
    let counter = 1
    for(let i = 0; i < arr.length; i++){
        if(counter != arr[i]){
            return counter
        }
        counter += 1
    }
}

console.log(findMissingNumber([1, 2, 3,  5])); // Expected output: 3