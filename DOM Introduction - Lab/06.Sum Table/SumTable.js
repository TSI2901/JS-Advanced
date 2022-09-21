function sumTable() {
    let table = document.querySelectorAll('table tr')
    let sum = 0;
    for (let i = 1; i <table.length-1 ; i++) {
        let coll = table[i].children;

        sum += Number(coll[1].textContent);
    }
    document.getElementById('sum').textContent = sum;
}