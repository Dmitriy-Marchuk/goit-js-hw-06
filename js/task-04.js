// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
// уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.


const buttonCountMinus = document.querySelector('button[data-action="decrement"');
const buttonCountPlus = document.querySelector('button[data-action="increment"');
const count = document.querySelector("span#value");
let counterValue = 0;


buttonCountMinus.addEventListener('click', onButtonCountMinusClick);

function onButtonCountMinusClick() {
    counterValue -= 1;
    count.textContent = counterValue;
};


buttonCountPlus.addEventListener('click', onButtonCountPlusClick);

function onButtonCountPlusClick() {
    counterValue += 1;
    count.textContent = counterValue;
};



