function Rotate(arr,num) {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}