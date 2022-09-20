function solve(arr) {
    let result = [];

    for (let data of arr) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    }

    return JSON.stringify(result);
}