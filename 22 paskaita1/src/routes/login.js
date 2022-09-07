const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');

  const logObject = {
    email: emailEl.value,
    password: passwordEl.value,
  };
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(logObject),
  };
  fetch('http://localhost:3000/v1/auth/login', option)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
});
