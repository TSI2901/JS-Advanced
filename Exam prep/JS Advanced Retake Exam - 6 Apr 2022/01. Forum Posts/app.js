window.addEventListener("load", solve);

function solve() {
    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');
    let publishBtn = document.getElementById('publish-btn');
    let reviewList = document.getElementById('review-list');
    let publishList = document.getElementById('published-list');
    let clearBtn = document.getElementById('clear-btn');

    publishBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (title.value === '' || category.value === '' || content.value === ''){
            return;
        }
        let li = document.createElement('li');
        li.className = 'rpost';

        let article = document.createElement('article');

        let h4 = document.createElement('h4');
        h4.textContent = title.value;

        let categoryP = document.createElement('p');
        categoryP.textContent = 'Category: ' + category.value;

        let contentP = document.createElement('p');
        contentP.textContent = 'Content: ' + content.value;

        article.appendChild(h4);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');

        let approveBtn = document.createElement('button');
        approveBtn.textContent = 'Approve';
        approveBtn.classList.add('action-btn');
        approveBtn.classList.add('approve');

        li.appendChild(article);
        li.appendChild(approveBtn);
        li.appendChild(editBtn);

        reviewList.appendChild(li);

        title.value = "";
        category.value = "";
        content.value = "";

        editBtn.addEventListener('click', (e) => {
            title.value = h4.textContent;
            category.value = categoryP.textContent.slice(10);
            content.value = contentP.textContent.slice(9);

            e.target.parentNode.remove();
        });

        approveBtn.addEventListener('click', (e) => {
            let publishLi = document.createElement('li');
            publishLi.className = 'rpost';

            let publishArticle = document.createElement('article');

            let publishH4 = document.createElement('h4');
            publishH4.textContent = h4.textContent;

            let publishCategoryP = document.createElement('p');
            publishCategoryP.textContent = categoryP.textContent;

            let publishContentP = document.createElement('p');
            publishContentP.textContent = contentP.textContent;

            publishArticle.appendChild(publishH4);
            publishArticle.appendChild(publishCategoryP);
            publishArticle.appendChild(publishContentP);

            publishLi.appendChild(publishArticle);

            publishList.appendChild(publishLi);

            e.target.parentNode.remove();

            clearBtn.addEventListener('click', (e) => {
                const ul = document.querySelector('#published-list');
                const liEls = ul.querySelectorAll('li');

                liEls.forEach(function (el) {
                    el.remove();
                })
            });
        });
    });

}
