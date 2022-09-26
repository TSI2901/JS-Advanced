function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let tableCells = document.getElementById('customers').getElementsByTagName('td');
    let flag= false;
    for (let tableCell of tableCells) {
        if (tableCell.textContent === email){
            tableCell.parentElement.remove();
            flag = true;

        }
    }
    let result = document.getElementById('result');
    result.textContent = flag ? 'Deleted': 'Not found.';
}