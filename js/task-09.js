// Напиши скрипт, который изменяет цвета фона элемента < body > 
// через инлайн стиль при клике на button.change - color
// и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeElement = document.querySelector("button.change-color");
const spanElement = document.querySelector("span.color");

buttonChangeElement.addEventListener('click', changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = document.body.style.backgroundColor;
}