function FindTheBiggestEl(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < arr.length; row++) {

        let currentBiggest = Math.max(...arr[row]);

        if (currentBiggest >= biggestNum) {
            biggestNum = currentBiggest;
        }
    }

    return biggestNum;
}