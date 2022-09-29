function lockedProfile() {
    let btns = document.getElementsByTagName('button');
    for (let btn of btns) {
        btn.addEventListener('click',function (){
            let parent = btn.parentElement;
            let unlock = parent.children.item(4);
            let info = parent.children.item(9);
            if (unlock.checked === true){
                if (btn.textContent === 'Show more'){
                    info.style.display = 'block';
                    btn.textContent = 'Hide it'
                }
                else if(btn.textContent === 'Hide it'){
                    info.style.display = 'none';
                    btn.textContent = 'Show more'
                }
            }
            else {
                if (btn.textContent === 'Hide it'){
                    btn.disabled = false;
                }
                return;
            }
        })
    }
}