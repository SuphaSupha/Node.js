const handleDelete = (id) => {
  const params = { method: "DELETE" };
  fetch(`http://localhost:3000/cars/${id}`, params)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

const renderCard = (car) => {
  const { numberplates, title, image } = car;
  const numberplateEl = document.createElement("h2");
  numberplateEl.textContent = numberplates;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const imageEl = document.createElement("img");
  imageEl.src = image;

  const card = document.createElement("div");
  card.className = "card";
  const btn = document.createElement("button");
  btn.textContent = "DELETE";

  btn.addEventListener("click", () => handleDelete(car["id"]));

  card.append(numberplateEl, titleEl, imageEl, btn);

  document.querySelector(".cards").append(card);
};

const fetchCars = () => {
  fetch("http://localhost:3000/cars")
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      response.forEach((car) => renderCard(car));
    })
    .catch((err) => {
      console.error(err);
    });
};
fetchCars();
