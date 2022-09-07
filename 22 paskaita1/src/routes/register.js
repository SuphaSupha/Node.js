const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');

  const regObject = {
    email: emailEl.value,
    password: passwordEl.value,
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(regObject),
  };

  fetch('http://localhost:3000/v1/auth/register', options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
