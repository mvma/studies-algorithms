// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log(''.padStart(i, '#') + ''.padEnd(n - i, ' '));
    }
}

function otherAttempt(n) {
    let str1 = '';
    let str2 = '';

    for (let i = 0; i < n; i++) {
        str1 += ' ';
        str2 += '#';
    }

    for (let index = 1; index <= n; index++) {
        console.log(str2.substring(0, index) + str1.substring(0, n - index));
    }
}

function theirs(n) {
    let str = '';

    for (let row = 0; row < n; row++) {
        str = '';
        for (let col = 0; col < n; col++) {
            if (col <= row)
                str += '#';
            else
                str += ' ';
        }
        console.log(str);
    }
}

function theirs2(n, row = 0, stairs = '') {
    if (n === row) return;

    if (stairs.length === n) {
        console.log(stairs);
        steps(n, row + 1, '');
        return;
    }

    if (stairs.length <= row) {
        stairs += '#';
    } else {
        stairs += ' ';
    }

    steps(n, row, stairs);
}


module.exports = theirs2;