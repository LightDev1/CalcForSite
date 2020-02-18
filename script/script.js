const startButton = document.querySelector('.start-button'),
    firtsScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    formCalculate = document.querySelector('.form-calculate'),
    endButton = document.querySelector('.end-button'),
    total = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range');

const showElem = (elem) => {
    elem.style.display = 'block';
} ;

const hideElem = (elem) => {
    elem.style.display = 'none';
};
 

startButton.addEventListener('click', () => {
    showElem(mainForm);
    hideElem(firtsScreen);
});

const handlerCallBackForm = (event) => {
    const target = event.target;

    if (target.classList.contains('want-faster')) {
       target.checked ? showElem(fastRange) : hideElem(fastRange);
    }
};

endButton.addEventListener('click', () => {

    for (let elem of formCalculate.elements) {
        if (elem.tagName === 'FIELDSET') {
            hideElem(elem);
        }

        showElem(total);
    }
});

formCalculate.addEventListener('change', handlerCallBackForm);