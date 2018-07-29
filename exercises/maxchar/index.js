// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {};

    for (let character of str) 
        map[character] = map[character] + 1 || 1;

    let character = '';
    let maxOcurrs = 0;
    
    for (let char in map) {
        if (map[char] <= maxOcurrs)
            continue;

        character = char;
        maxOcurrs = map[char];
    }

    return character;
}

module.exports = maxChar;