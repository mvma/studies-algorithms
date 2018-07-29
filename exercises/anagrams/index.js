// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    let leftMap = new Map(),
        rightMap = new Map();

    for (let character of stringA) {
        if (leftMap.has(character))
            leftMap.set(character, leftMap.get(character) + 1);
        else
            leftMap.set(character, 1);
    }

    for (let character of stringB) {
        if (rightMap.has(character))
            rightMap.set(character, rightMap.get(character) + 1);
        else
            rightMap.set(character, 1);
    }

    if (leftMap.size != rightMap.size)
        return false;

    for (let [key, value] of leftMap) {
        if (rightMap.get(key) !== value) return false;
    }

    return true;
}

function theirs(stringA, stringB) {
    let lArray = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort();
    let rArray = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort();

    if (lArray.length != rArray.length)
        return false;

    for (let i = 0; i < lArray.length; i++)
        if (lArray[i] !== rArray[i])
            return false;

    return true;
}

function theirs2(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

    return stringA === stringB;
}

module.exports = theirs2;