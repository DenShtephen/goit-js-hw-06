const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', (evt) => {
    const fontSizeResult = evt.target.value
    spanEl.style.fontSize = fontSizeResult + 'px'
});