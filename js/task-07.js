const input = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    inputText.style.fontSize = event.currentTarget.value + 'px';
}