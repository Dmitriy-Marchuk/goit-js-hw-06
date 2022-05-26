// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй 
//     метод document.createElement().

// Добавит название ингредиента как его текстовое содержимое.

// Добавит элементу класс item.

// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// for (const ingredient of ingredients) {
//   const li = document.createElement("li");
//   const ul = document.querySelector("ul#ingredients")

//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.append(li);

//   console.log(li);
// }

const ingredientsListRef = document.querySelector("ul#ingredients")

const ingredientsElement = ingredients.forEach(ingredientName => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredientName;
  ingredientItem.classList.add('item')
  ingredientsListRef.append(ingredientItem)
});



