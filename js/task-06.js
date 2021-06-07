const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidInputBlur);

function onValidInputBlur() {
    if (event.currentTarget.value.length === Number(validationInput.getAttribute('data-length'))) {
        validationInput.classList.add('valid');
        if(validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid');
        }
    } else {
        validationInput.classList.add('invalid');
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid');
        }
    }
    if (event.currentTarget.value.length === 0 && validationInput.classList.contains('invalid')) {
        validationInput.classList.remove('invalid');
    }
}