// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const mark = 's';

    let arr = [root, mark];
    let counters = [0];

    let counterIndex = 0;

    let current;
    while (arr.length > 1) {

        current = arr.shift();

        if (current === mark) {
            counterIndex++;
            counters.push(0);
            arr.push(mark);
        } else {
            arr.push(...current.children);
            counters[counterIndex]++;
        }
    }

    return counters;
}

module.exports = levelWidth;