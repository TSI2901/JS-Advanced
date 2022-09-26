function addItem() {
    let list = document.getElementById('items');
    let newItem = document.getElementById('newItemText').value;
    let liItem = document.createElement('li');
    liItem.textContent = newItem;
    list.appendChild(liItem);
}