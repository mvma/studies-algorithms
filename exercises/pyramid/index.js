// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let start = 0,
        medium = Math.floor((n + n - 1) / 2),
        end = 0,
        cols = n + n - 1;

    for (let row = 0; row < n; row++) {
        let blocks = '';

        start = medium - row;
        end = medium + row;

        for (let col = 0; col < cols; col++) {
            if (col < start) {
                blocks += ' ';
            } else if (col > end) {
                blocks += ' ';
            } else {
                blocks += '#';
            }
        }

        console.log(blocks);
    }
}

function recursion(n, row = 0, blocks = '') {
    if (n === row) return;

    const medium = Math.floor((n + n - 1) / 2);

    if (blocks.length == (n + n - 1)) {
        console.log(blocks);

        return pyramid(n, row + 1, '');
    }

    if (blocks.length < medium - row || blocks.length > medium + row)
        blocks += ' ';
    else
        blocks += '#';

    pyramid(n, row, blocks);
}


module.exports = recursion;