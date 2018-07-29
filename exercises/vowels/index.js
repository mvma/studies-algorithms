// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };

    let totalVowels = 0;
    for (let character of str.toLowerCase()) {
        if (vowels[character])
            totalVowels++;
    }

    return totalVowels;
}

function regex(str) {
    // where g means global and i means ignore case
    let regex = /[aeiou]/ig;

    return (str.match(regex) || []).length;
}

module.exports = regex;