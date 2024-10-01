// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

arrayDifference = function(arr1, arr2){
    let notIn = arr1.filter(element => !arr2.includes(element))
    return notIn
}

console.log(arrayDifference([1, 5, 3], [2, 3, 4])); // Expected output: [1]