const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const emailInput = document.querySelector("#email").value;

  const object = {
    name: nameInput,
    email: emailInput,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  };
  fetch("http://localhost:3000/users", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
});
