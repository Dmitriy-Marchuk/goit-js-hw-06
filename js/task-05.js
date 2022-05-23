// Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input),
//  подставляет его текущее значение в span#name - output.

//  Если инпут пустой, в спане должна отображаться строка "Anonymous".



const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");


inputElem.addEventListener('input', ({currentTarget}) => {
    spanElem.textContent = currentTarget.value || "Anonymous";
});
