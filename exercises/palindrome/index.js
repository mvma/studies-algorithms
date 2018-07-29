// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversed = str.split('').reduce((prev, char) => char + prev, '');

    return reversed == str;
}


/* it's not a good solution, because is doing twice more work than required
given a string 'ana', it's gonna do the following steps:
0   1  2    length = 3
[a][n][a]

1 index = 0, char = a, [length - index - 1] = 2
2 index = 1, char = n, [length - index - 1] = 1
3 index = 2, char = a, [length - index - 1] = 0 did before, at step 1

function theirs1(str) {
    let length = str.length - 1;

    let isPalindrome = str.split('').every((char, index) => {
        return char == str[length - index];
    });

    return isPalindrome;
}
*/

/*
function theirs2(str) {
  let reversed = str.split('').reverse().join('');

  return reversed === str;
}
*/

module.exports = palindrome;