window.addEventListener("load", solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let storyTitle = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let story = document.getElementById('story');
    let publishBtn = document.getElementById('form-btn');
    let previewList = document.getElementById('preview-list');


    publishBtn.addEventListener('click', function () {
        if(firstName.value === "" || lastName.value === "" || age.value ==="" || storyTitle.value === "" || story.value === ''){
            return;
        }
        let _firstName = firstName.value;
        let _lastName = lastName.value;
        let _age = age.value;
        let _storyTitle = storyTitle.value;
        let _genre = genre.value;
        let _story = story.value;
        let li = document.createElement('li');
        li.setAttribute('class','story-info');

        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = 'Name: ' + firstName.value + ' ' + lastName.value;

        let p1 = document.createElement('p');
        p1.textContent = 'Age: ' + age.value;

        let p2 = document.createElement('p');
        p2.textContent = 'Title: ' + storyTitle.value;

        let p3 = document.createElement('p');
        p3.textContent = 'Genre: ' + genre.value;

        let p4 = document.createElement('p');
        p4.textContent = story.value;

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save Story';
        saveBtn.setAttribute('class',"save-btn");

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit Story';
        editBtn.setAttribute('class','edit-btn');

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete Story';
        deleteBtn.setAttribute('class','delete-btn');

        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        previewList.appendChild(li);

        publishBtn.disabled = true;

        firstName.value = "";
        lastName.value = "";
        age.value = "";
        storyTitle.value = "";
        story.value = "";
        genre.value = "";

        editBtn.addEventListener('click', function (){
            publishBtn.disabled = false;
            firstName.value = _firstName;
            lastName.value = _lastName;
            age.value = _age;
            storyTitle.value = _storyTitle;
            story.value = _story;
            genre.value = _genre;

            editBtn.parentElement.remove();
        })
        saveBtn.addEventListener('click', function (){
            let formwrapper = document.getElementsByClassName('form-wrapper')[0];
            let sidewrapper = document.getElementById('side-wrapper');
            let main = document.getElementById('main');
            formwrapper.remove();
            sidewrapper.remove();
            let h1 = document.createElement('h1');
            h1.textContent = "Your scary story is saved!";
            main.appendChild(h1);
        })
        deleteBtn.addEventListener('click',function () {
            let sideWrapper = document.getElementById('side-wrapper');
            let previewList = document.getElementById('preview-list');
            previewList.remove();
            let ul = document.createElement('ul');
            ul.setAttribute('id','preview-list')
            ul.innerHTML = '<h3>Preview</h3>';
            sideWrapper.appendChild(ul);
            publishBtn.disabled = false;
        })
    })
}
