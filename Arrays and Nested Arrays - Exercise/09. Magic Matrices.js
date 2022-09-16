function solve(matrix) {

    let size = matrix.length;
    let targetSum = matrix[0].reduce((acc, num) => acc + num);
    let rowSum = 0;
    let isMagic = true;

    matrix.forEach(arr => {
        rowSum = arr.reduce((acc, num) => acc + num);
        if (rowSum !== targetSum) {
            isMagic = false;
        }
    })

    if (!isMagic) {
        return false;
    }

    for (let col = 0; col < size; col++) {
        let colSum = 0;
        for (let row = 0; row < size; row++) {
            colSum += matrix[row][col];
        }

        if (colSum !== targetSum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;
}