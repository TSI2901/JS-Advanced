function even(arr) {
    let arr2 = []
    //for (let i = 0; i < arr.length; i++) {
        //if (i % 2 == 0){
            //arr2.push(arr[i]);

        //}
    //}
    arr2 = arr.filter((x,i) => {
        if (i % 2 ==0){
            return x;
        }
    })
    console.log(arr2.join(' '))
}
even([20,30,40,50,60])