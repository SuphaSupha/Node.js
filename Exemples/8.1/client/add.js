const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#firstName");
  const ageInput = document.querySelector("#age");
  const typeInput = document.querySelector("#type");

  const inputObject = {
    name: nameInput.value,
    age: +ageInput.value,
    type: typeInput.value,
  };

  console.log(inputObject);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(inputObject),
  };

  fetch("http://localhost:3000/pets", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
});
