function EditTheArray(arr) {
    return arr.filter((x , i) => i % 2 !== 0).map(function (num){
        return num * 2;
    }).reverse().join(' ');
}
console.log(EditTheArray([3, 0, 10, 4, 7, 3]))