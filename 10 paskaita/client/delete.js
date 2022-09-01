const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const idInput = document.querySelector("#id").value;

  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(idInput),
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
