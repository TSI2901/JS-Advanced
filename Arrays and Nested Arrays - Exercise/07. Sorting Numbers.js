function sort(arr) {
    let sorted = arr.sort((a, b) => a - b);

    let result = [];

    while (sorted.length != 0) {
        result.push(sorted.shift(), sorted.pop());
    }
    return result;
}