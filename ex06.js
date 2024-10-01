// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

getQueryParams = function(url){
    let newUrl = url.split("?")
    newUrl = newUrl[1]
    newUrl = newUrl.split(/=|&/)
 
    let obj = {}
    
    for(let i = 0; i < newUrl.length; i+=2){
        obj[newUrl[i]] = newUrl[i+1]
    }

    return obj
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }