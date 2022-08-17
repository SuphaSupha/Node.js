const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");
  const ageInput = document.querySelector("#age");
  const typeInput = document.querySelector("#type");

  const petsObject = {
    name: nameInput.value,
    age: +ageInput.value,
    type: typeInput.value,
  };

  console.log(petsObject);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(petsObject),
  };

  fetch("http://localhost:8080/pets", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
});
