function Order(arr) {
    arr.sort((a,b) => a.localeCompare(b))
    for (let i = 1; i <= arr.length; i++) {
        console.log(`${i}.${arr[i-1]}`)
    }
}
Order(["John",

    "Bob",

    "Christina",

    "Ema"])