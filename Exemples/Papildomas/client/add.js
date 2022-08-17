const addForm = document.querySelector("form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const idInput = document.querySelector("#id");
  const titleInput = document.querySelector("#title");
  const bodyinput = document.querySelector("#body");

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      userId: +idInput.ariaValueMax,
      title: titleInput.value,
      body: bodyinput.value,
    }),
  };

  fetch("http://localhost:8080/addedUsers", options)
    .then((resp) => resp.json())
    .then((response) => console.log(response))
    .catch((err) => {
      console.error(err);
    });
});
