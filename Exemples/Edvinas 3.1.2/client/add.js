const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formInput = document.querySelector("#firstName");
  const greetings = document.createElement("h3");
  greetings.textContent = `Greetings user: ${formInput.value}`;
  document.body.prepend(greetings);

  const nameObject = { name: formInput.value };
  console.log(nameObject);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nameObject),
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
