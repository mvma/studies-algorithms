// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// * instead of var, maybe let is more approachable
// * on js2015 strings are iterable, so using 'for of', might be an opportunity 
// to avoid making use of an extra space
function reverse(str) {
    var reverseStr = '';

    var arr = str.split('');

    for (var i = arr.length - 1; i >= 0; i--) {
        reverseStr += arr[i];

        debugger;
    }

    return reverseStr;
}

/* function theirs1(str) {
    let reversed = '';

    for(let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

 */
/* function theirs2(str) {
    return str.split('').reduce((prev, char) => char + prev, ''); 
}
 */

module.exports = reverse;