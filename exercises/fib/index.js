// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// O(n)
function fib(n) {
    if (n < 2) return 1;

    let next = 1;
    let prev = 0;
    let term = 0;

    while (n > 1) {
        n--;

        term = prev + next;
        prev = next;
        next = term;
    }

    return term;
}

function memoize(fn) {
    var cache = {};
    
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        let result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {
    if (n < 2) return n;

    return fastFib(n - 1) + fastFib(n - 2);
}

const fastFib = memoize(slowFib);

module.exports = slowFib;