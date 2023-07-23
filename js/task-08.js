
 const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onSubmit);


    function onSubmit(evt) {
      evt.preventDefault();

      const { email, password } = evt.target.elements;

      if (!email.value || !password.value) {
        alert('Усі поля повинні бути заповнені.');
      } else {
        console.log({ email: email.value, password: password.value });
        loginFormEl.reset();
      }
    }