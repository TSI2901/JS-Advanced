function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    let menu = document.getElementById('menu');
    option.textContent = text;
    option.value = value;
    menu.appendChild(option);
    document.getElementById(`newItemText`).value = "";
    document.getElementById(`newItemValue`).value = "";
}