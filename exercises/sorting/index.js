// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let swap = 0;
    let sorted = false;

    for (let i = 0; i < arr.length; i++) {
        if (sorted) {
            break;
        }
        sorted = true;
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;

                sorted = false;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    let minIndex = 0;
    let swap;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (i === minIndex) {
            continue;
        }

        swap = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = swap;
    }

    return arr;
}

function mergeSort(arr) {

    if (arr.length === 1) {
        return arr;
    }

    let center = Math.floor(arr.length / 2);

    let left = arr.slice(0, center);
    let right = arr.slice(center);

    left  = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }

    return [...result, ...left, ...right]
}

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    merge
};