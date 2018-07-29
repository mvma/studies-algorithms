// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function mine(array, size) {
    let chunks = [];

    let i = 0,
        j = 0;
    while (i < array.length) {

        let temp = [];

        j = size;
        while (j > 0 && i < array.length) {
            temp.push(array[i]);

            i++;
            j--;
        }

        chunks.push(temp);
    }

    return chunks;
}

function chunk(array, size) {
    let chunkedArray = [];

    for (let element of array) {

        let lastChunk = chunkedArray[chunkedArray.length - 1];

        if (lastChunk === undefined || lastChunk.length == size) {
            chunkedArray.push([element]);
        } else {
            lastChunk.push(element);
        }
    }

    return chunkedArray;
}

function theirs(array, size) {
    let chunked = [];

    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));

        index += size;
    }

    return chunked;
}


module.exports = theirs;