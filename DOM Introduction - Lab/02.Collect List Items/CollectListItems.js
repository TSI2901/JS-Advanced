function extractText() {
    let list = document.getElementById('items');
    let text = document.getElementById('result')
    text.value = list.textContent;
}