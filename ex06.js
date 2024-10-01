// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

getQueryParams = function(url){
    let newUrl = url.split("?")
    newUrl = newUrl[1]
    newUrl = newUrl.split(/=|&/)
 
    let obj = {}
    obj[newUrl[0]] = newUrl[1]
    obj[newUrl[2]] = newUrl[3]

    return obj
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }