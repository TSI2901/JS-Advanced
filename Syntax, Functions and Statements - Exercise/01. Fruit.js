function CalculatePrice(type,weight,pricePerKilo){
    let kilos = weight / 1000;
    let sum = pricePerKilo * kilos;
    console.log(`I need $${sum.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type}.`)
}
CalculatePrice('orange', 2500, 1.80)
CalculatePrice('apple', 1563, 2.35)