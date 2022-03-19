//DOM elements
const DOMStrings = {

    rules: '.rules',
    ruleBox: '.rules-overlay',
    closeBtn: '.cross-btn',

}

//fade rules box
document.querySelector(DOMStrings.rules).addEventListener('click', () => {
    document.querySelector(DOMStrings.ruleBox).classList.add('active')
})

//close rules box
document.querySelector(DOMStrings.closeBtn).addEventListener('click', () => {
    document.querySelector(DOMStrings.ruleBox).classList.remove('active');
})