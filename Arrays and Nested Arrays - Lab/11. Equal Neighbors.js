function solve(matrix) {

    let numberOfNeighbours = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {


            if (row < matrix.length - 1) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    numberOfNeighbours++;
                }
            }

            if (matrix[row][col] === matrix[row][col + 1]) {
                numberOfNeighbours++;
            }
        }
    }

    return numberOfNeighbours;
}