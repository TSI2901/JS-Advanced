function Print(arr,num) {
    let result =[];
    for (let i = 0; i < arr.length; i+= num) {
        result.push(arr[i])
    }
    return result;
}
Print(['5','20', '31', '4', '20'], 2)
Print(['dsa', 'asd', 'test', 'tset'], 2)