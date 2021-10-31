/**
 * @param {object} options
 * @returns {string}
 */
const generatePassword = (options = { justLowerCase: false, justUpperCase: false, randomCase: true, symbols: "qwertyuopasdfghjklizxcvbnm1234567890", length: 10 }) => {
    let { justLowerCase, justUpperCase, randomCase, symbols, length } = options;
    if (justLowerCase === undefined) justLowerCase = false
    if (justUpperCase === undefined) justUpperCase = false
    if (randomCase === undefined) randomCase = true
    if (symbols === undefined) symbols = "qwertyuopasdfghjklizxcvbnm1234567890"
    if (length === undefined) length = 10
    if ((justLowerCase === true && justLowerCase) &&
        (justUpperCase === true && justUpperCase)) throw new Error(`Only one of "justLowerCase" and "justUpperCase" can be true`)

    let keys = [];
    for (let i = 0; i < symbols.length; i++) {

        keys.push(symbols[i])
    }

    let password = ""

    for (let i = 0; i < length; i++) {
        let numb = Math.floor(Math.random() * keys.length);

        let key = keys[numb];

        if (justLowerCase === true) {
            password += key.toLowerCase();
        } else if (justUpperCase === true) {
            password += key.toUpperCase();
        } else if (randomCase === true) {
            let lower_case = [true, false];
            let lower_case_number = Math.floor(Math.random() * lower_case.length);
            lower_case = lower_case[lower_case_number];

            if (lower_case) password += key.toLowerCase();
            else password += key.toUpperCase();
        } else {
            password += key
        }

    }

    return password
}

module.export = generatePassword;