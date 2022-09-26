function addItem() {
    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let value = input.value;
    let deleteButton = document.createElement('a');
    let li = document.createElement('li');
    li.textContent = value;
    deleteButton.textContent ='[Delete]';
    deleteButton.style.color = 'red';
    deleteButton.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);

}