function Order(arr) {
    let result = [];
    for (const element of arr) {
        if (element >= 0){
            result.push(element);
        }
        else{
            result.unshift(element)
        }
    }
    result.forEach(x => console.log(x))
}
Order([7, -2, 8, 9])