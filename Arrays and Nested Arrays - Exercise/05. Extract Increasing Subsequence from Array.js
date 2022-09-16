function solve(array) {

    let biggestNum = array[0];


    let result = [];
    array.reduce((acc, el) => {
        if (el >= biggestNum) {
            biggestNum = el;
            acc.push(el);
        }

        return acc;
    }, result);

    return result;
}