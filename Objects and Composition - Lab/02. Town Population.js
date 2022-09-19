function solve(arr) {
    let town = {};
    for (let i = 0; i < arr.length; i++) {
        let [currCity,currPopulation] = arr[i].split(' <-> ');
        currPopulation = Number(currPopulation);
        if(town[currCity] !== undefined){
            currPopulation += town[currCity];
        }
        town[currCity] = currPopulation;
    }
    for (const townKey in town) {
        console.log(`${townKey} : ${town[townKey]}`)
    }
}
solve(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000'])