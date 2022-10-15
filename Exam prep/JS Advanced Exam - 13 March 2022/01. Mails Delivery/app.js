function solve() {
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let msgList = document.getElementById('list');
    let sentList = document.getElementsByClassName(`sent-list`);
    let deleteList = document.getElementsByClassName(`delete-list`);

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(recipientName.value !== "" && title.value !== "" && message.value !== ""){
            let _titleValue = title.value;
            let _recipientNameValue = recipientName.value;

            let msgLi = document.createElement('li');

            let titleH4 = document.createElement('h4');
            titleH4.textContent = 'Title: ' + title.value;

            let recipientNameH4 = document.createElement('h4');
            recipientNameH4.textContent =  `Recipient Name: ${recipientName.value}`;

            let messageSpan = document.createElement('span');
            messageSpan.textContent = message.value;

            let div = document.createElement('div');
            div.setAttribute('id','list-action');

            let sendBtn = document.createElement('button');
            sendBtn.textContent = 'Send';
            sendBtn.setAttribute('type','submit');
            sendBtn.setAttribute('id','send');

            div.appendChild(sendBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('type','submit');
            deleteBtn.setAttribute('id','delete');

            div.appendChild(deleteBtn);

            msgLi.appendChild(titleH4);
            msgLi.appendChild(recipientNameH4);
            msgLi.appendChild(messageSpan);
            msgLi.appendChild(div);

            msgList.appendChild(msgLi);

            sendBtn.addEventListener('click', () => {
                let sendLi = document.createElement('li');

                let recipientNameSpan = document.createElement('span');
                recipientNameSpan.textContent = 'To: ' + _recipientNameValue;

                let titleSpan = document.createElement('span');
                titleSpan.textContent = 'Title: ' + _titleValue;

                let divLi = document.createElement('div');
                divLi.classList.add('btn');

                let deleteBtnLi = document.createElement('button');
                deleteBtnLi.textContent = 'Delete';
                deleteBtnLi.setAttribute('type', 'submit');
                deleteBtnLi.classList.add('delete');

                msgLi.remove();

                divLi.appendChild(deleteBtnLi);

                sendLi.appendChild(recipientNameSpan);
                sendLi.appendChild(titleSpan);
                sendLi.appendChild(divLi);

                sentList[0].appendChild(sendLi);

                deleteBtnLi.addEventListener('click', () => {
                    let liForTrash2 = document.createElement('li');

                    let spanForName = document.createElement('span');
                    spanForName.textContent = 'To: ' + _recipientNameValue;

                    let spanForTitle = document.createElement('span');
                    spanForTitle.textContent = 'Title: ' + _titleValue
                    liForTrash2.appendChild(spanForName);
                    liForTrash2.appendChild(spanForTitle);

                    deleteList[0].appendChild(liForTrash2);

                    sendLi.remove();
                })
            });

            deleteBtn.addEventListener('click', ()=>{
                let liForTrash = document.createElement('li');

                let spanForName = document.createElement('span');
                spanForName.textContent = 'To: ' + _recipientNameValue;

                let spanForTitle = document.createElement('span');
                spanForTitle.textContent = 'Title: ' + _titleValue
                liForTrash.appendChild(spanForName);
                liForTrash.appendChild(spanForTitle);

                deleteList[0].appendChild(liForTrash);
                msgLi.remove();
            })

            recipientName.value = "";
            title.value = "";
            message.value = "";
        }
    });
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        recipientName.value = "";
        title.value = "";
        message.value = "";
    })
}
solve()