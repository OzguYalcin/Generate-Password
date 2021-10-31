# Generate Password
A simple function for generating a password

```js
const generatePassword = require('generate-password');

const password = generatePassword({
    // Specified the symbols in the password
    // Default: "qwertyuopasdfghjklizxcvbnm1234567890"
    symbols: "qwerts",
    
    // Specified the passwords length
    // Default: 10
    length: 15,

    // Specified the symbols just be lower case or not
    // Default: false
    justLowerCase: false,

    // Specified the symbols just be upper case or not
    // Default: false
    justUpperCase: false, 

    // Symbols randomly be lower or upper case    
    randomCase: true
})
```