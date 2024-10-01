// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.
max = 0
const findMax = function(arr){
    if(arr.length > 0){
        if(max < arr[0]){
            max = arr[0]
            return (max, findMax(arr.slice(1)))
        }else{
            return (max, findMax(arr.slice(1)))
        }
    }else{
        return max
    }
}

console.log(findMax([10, 2, 46, 1, 5, 900])); // Expected output: 9