function toggle() {
    let onclick = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');
    if (onclick.textContent === 'More'){
        onclick.textContent = 'Less';
        text.style.display = 'block';
    }
    else {
        onclick.textContent = 'More';
        text.style.display = 'none';
    }
}