const ENDPOINT = "cars.json";

const renderCarsCards = (cars) => {
  const { brand, models } = cars;

  const outputBrand = document.createElement("h2");
  outputBrand.textContent = brand;
  outputBrand.style.textAlign = "center";
  outputBrand.style.textDecoration = "underline overline";
  const outputModel = document.createElement("p");
  outputModel.textContent = models;
  outputModel.style.width = "fit-content";

  const card = document.createElement("div");
  card.style.width = "47%";
  card.style.minHeight = "120px";
  card.style.borderRadius = "12px";
  card.style.padding = "12px";
  card.style.margin = "12px";
  card.style.background = "#21B6A8";
  card.style.boxShadow = "3px 6px 9px #21B6A8";

  const output = document.querySelector("#output");
  output.style.display = "flex";
  output.style.flexWrap = "wrap";
  card.append(outputBrand, outputModel);
  output.append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((cars) => renderCarsCards(cars));
  })
  .catch((error) => {
    console.error(error);
  });
