// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputSlider = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputSlider.addEventListener('input', handleInputChangeColor);

function handleInputChangeColor(event) {

    spanText.style.fontSize = event.currentTarget.value + "px";
    
    console.log(event.currentTarget.value);

};
            console.log(spanText.style.fontSize);
