function solve(arr) {
    let result = {};
    for (const arrElement of arr.sort((a,b) => a.localeCompare(b))) {
        let [product,price] = arrElement.split(' : ');
        price = Number(price);
        let obj = {product,price};
        let firstLetter = arrElement[0];
        if(!result[firstLetter]){
            result[firstLetter] = [];
        }
        result[firstLetter].push(obj);
    }
    for (const resultKey of Object.keys(result)) {
        console.log(resultKey);
        for (const item of result[resultKey]) {
            console.log(`  ${item.product}: ${item.price}`)
        }
    }
}
solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])