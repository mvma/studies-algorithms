// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let capitalizedArray = [];
    let nonCapitalizedArray = str.split(' ');

    for (let index = 0; index < nonCapitalizedArray.length; index++) {
        capitalizedArray.push(nonCapitalizedArray[index][0].toUpperCase() + nonCapitalizedArray[index].substring(1));
    }

    return capitalizedArray.join(' ')
}

function theirs(str) {
    let result = '';
    let left = ' ';

    for (let character of str) {
        if (left === ' ')
            result += character.toUpperCase();
        else
            result += character;

        left = character;
    }

    return result;
}


module.exports = theirs;