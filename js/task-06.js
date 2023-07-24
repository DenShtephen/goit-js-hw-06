const inputEl = document.querySelector('#validation-input');
  const dataLength = inputEl.getAttribute('data-length');


inputEl.addEventListener('blur', (evt) => {
  const input = evt.target;
 if (input.value.length >= dataLength)  {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});