function solve(arr,sorting) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let classList = [];
    for (const arrElement of arr) {
        let[destination,price,status] = arrElement.split("|");
        let currTicket = new Ticket(destination,Number(price),status);
        classList.push(currTicket);
    }
    let sorted;
    sorting !== 'price' ? sorted = classList.sort((a,b) => a[sorting].localeCompare(b[sorting])): sorted = classList.sort((a,b) => a[sorting] - b[sorting]);
    return sorted;
}
console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination')
);