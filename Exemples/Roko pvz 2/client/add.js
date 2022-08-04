const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("input[name=name]");

  const surnameInput = document.querySelector("name[name=surname]");
  const nameObject = { name: nameInput.value, surname: surnameInput.value };
  console.log(nameInput.value);
  console.log(nameObject);

  const options = {
    method: "POST",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nameObject),
  };

  fetch("http://localhost:3000/names", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
