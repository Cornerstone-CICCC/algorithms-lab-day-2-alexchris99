// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

validateEmail = function(email){
    let newEmail = email.split("")
    let validators  = ["@"]
    let count = 0
    for(let i = 0; i < validators.length; i++){
        for(let j = 0; j < newEmail.length; j++){
            if(validators[i] == newEmail[j]){
                count +=1
            }
        }
    }
    if(newEmail.includes("@") && newEmail.includes(".") && count == 1){
        return true
    }else{
        return false
    }

}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false