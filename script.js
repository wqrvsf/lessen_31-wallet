let btn = document.querySelector('.editor__button');
let name = document.querySelector('.name');
let price = document.querySelector('.price');
let category = document.querySelector('.category');
let tbody = document.querySelector('.tbody');
let btnDel = document.querySelector('.del');

let purchase = {};

btn.addEventListener('click', function (event) {
    event.preventDefault();
    purchase.name = form.name.value;
    purchase.price = form.price.value;
    purchase.category = form.category.options[form.category.selectedIndex].innerText;
    tbody.insertAdjacentHTML('beforeEnd',
        `<tr class = "purchases__item purchases__row" data-category = "product">
            <td class = "purchases__td">${purchase.name}</td>
            <td class = "purchases__td">${purchase.category}</td>
            <td class = "purchases__td">${purchase.price}</td>
            <td class = "purchases__td del">✖</td>
        </tr>`
    )
});

tbody.addEventListener('click', (evt) => {
    console.log(evt);
    console.log(evt.target);
    evt.target.classList.contains('del');
    if (evt.target = true) {
        evt.target.closest('tr').remove();
    }
    // проверить наличие класса "del" у элемента по которому кликнули
    // если класс есть - удалить родителя tr (загуглить как найти родителя элемента)
})

let purchaseArray = [];
let BTN = form.addBtn;
let categories = document.querySelectorAll('.legend__desc');
let prices = document.querySelectorAll('.legend__price');

console.log(categories);

BTN.addEventListener('click', (event) => {
    let purchase = {};
    event.preventDefault();
    purchase.name = form.name.value;
    purchase.price = +form.price.value;
    let options = form.category.options;
    purchase.category = options[form.category.selectedIndex].innerText;
    for (let category of categories) {
        if(purchase.category == category.innerText) {
            category.nextElementSibling.textContent = Number(category.nextElementSibling.innerText) + purchase.price;
        }
    }
    purchaseArray.push(purchase);
    console.log(purchaseArray);

    tbody.insertAdjacentHTML('beforeEnd',
    `
    <tr class = "purchases__item purchases__row" data-category = "product">
        <td class = "purchases__td">${purchase.name}</td>
        <td class = "purchases__td">${purchase.category}</td>
        <td class = "purchases__td">${purchase.price}</td>
        <td class = "purchases__td"><i class = "purchases__item-del fa-solid fa-xmark"></i></td>
    </tr>
    `
    )
    form.reset();
});

tbody.addEventListener('click', (event) => {
    if (event.target.classList.contains('purchases__item-del')){
        event.target.closest('tr').remove();
    }
})








