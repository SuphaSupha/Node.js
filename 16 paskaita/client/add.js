const form = document.querySelector(".conteiner");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title");
  const url = document.querySelector("#image");
  const numberplate = document.querySelector("#numberplate");
  const price = document.querySelector("#price");

  const carObject = {
    title: title.value,
    image: url.value,
    price: price.value,
    numberplates: numberplate.value,
  };

  console.log(carObject);

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(carObject),
  };

  fetch("http://localhost:3000/cars", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
});
