// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let remaining = 0;

    while (Math.abs(n) > 0) {

        remaining = remaining * 10 + (n % 10);

        n = parseInt(n / 10);
    }

    return remaining;
}

module.exports = reverseInt;