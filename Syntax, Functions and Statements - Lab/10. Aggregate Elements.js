function solve(array) {
    console.log(aggegate(array, x => x))
    console.log(aggegate(array, x => 1/x))
    console.log(aggegate(array, x => x.toString()))
    function aggegate(array,func){
        let result = array[0];
        for (let i = 1; i < array.length; i++) {
            result += func(array[i]);
            
        }
        return result;
    }
}
solve([1,2,3])