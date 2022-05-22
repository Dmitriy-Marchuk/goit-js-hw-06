// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
//     и количество элементов в категории(всех вложенных в него < li >).


const categories = document.querySelectorAll("ul#categories>li.item");

console.log("Number of categories:", categories.length);


for (const category of categories) {
    const nameCategory = category.firstElementChild.textContent;   
    const quantityElements = category.lastElementChild.children.length;

    console.log(`Category: ${nameCategory} \nElements: ${quantityElements}`);
};

