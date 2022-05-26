// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.

// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.




const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener('blur', inputBlurHandler);

function inputBlurHandler({ target }) {
    const inputLength = target.value.length
    const neededLength = Number(target.dataset.length)
    if (inputLength === neededLength) {
        target.classList.add('valid');
        target.classList.remove('invalid');
        return;
    };
    target.classList.add('invalid');
    target.classList.remove('valid');
};


