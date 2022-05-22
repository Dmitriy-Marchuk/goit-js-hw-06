








const categories = document.querySelectorAll("ul#categories>li.item");

console.log("Number of categories:", categories.length);


for (const category of categories) {
    const nameCategory = category.firstElementChild.textContent;   
    const quantityElements = category.lastElementChild.children.length;

    console.log(`Category: ${nameCategory} \nElements: ${quantityElements}`);
};