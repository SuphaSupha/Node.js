const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#firstName");
  const surnameInput = document.querySelector("#surName");

  const greating = document.querySelector("h2");
  greating.textContent = `User: ${nameInput.value} ${surnameInput.value} added`;
  const nameSurnameObject = {
    name: nameInput.value,
    surname: surnameInput.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nameSurnameObject),
  };

  fetch("http://localhost:8080/names", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
});
