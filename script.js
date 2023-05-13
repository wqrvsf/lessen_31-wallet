let btn = document.querySelector('.editor__button');
let name = document.querySelector('.name');
let price = document.querySelector('.price');
let category = document.querySelector('.category');
let tbody = document.querySelector('#tbody');

let purchase = {};

btn.addEventListener('click', function (event){
    event.preventDefault();
    purchase.name = form.name.value;
    purchase.price = form.price.value;
    purchase.category = form.selectCategory.options[form.selectCategory.selectedIndex].innerText;
    tbody.insertAdjacentHTML('beforeEnd',
        `<tr class = "purchases__item purchases__row" data-category = "product">
            <td class = "purchases__td">${purchase.name}</td>
            <td class = "purchases__td">${purchase.category}</td>
            <td class = "purchases__td">${purchase.price}</td>
            <td class = "purchases__td"><i class = "purchases__item-del fa-solid fa-xmark"></i></td>
        </tr>`
    )
});






