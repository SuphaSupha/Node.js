let orderSelection = "asc";
let petSelection = ["dog", "cat", "bunny"];

function renderData(data) {
  const table = document.querySelector("tbody");
  table.innerHTML = "";

  data.forEach((pet) => {
    const tr = table.insertRow();
    const td1 = tr.insertCell();
    const td2 = tr.insertCell();
    const td3 = tr.insertCell();

    td1.textContent = pet.name;
    td2.textContent = pet.type;
    td3.textContent = pet.age;
  });
}

function getData() {
  fetch(`http://localhost:8080/pets${petSelection.join(",")}/${orderSelection}`)
    .then((resp) => resp.json())
    .then((response) => renderData(response));
}

getData();

fetch("http://localhost:8080/pets")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    renderData(response);
  })
  .catch((err) => {
    console.error(err);
  });

document.querySelector("#age").addEventListener("click", (e) => {
  const text = e.target.textContent;
  if (text.includes("Asc")) {
    e.target.textContent = text.replace("Asc", "Dsc");
    orderSelection = "dsc";
  } else {
    e.target.textContent = text.replace("Dsc", "Asc");
    fetch("http://localhost:8080/pets/asc");
    orderSelection = "asc";
  }

  getData();
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
    const petClicked = e.target.textContent.toLowerCase();

    if (petSelection.includes(petClicked)) {
      petSelection = petSelection.filter(
        (petStored) => petStored !== petClicked
      );
    } else {
      petSelection.push(petClicked);
    }
    getData();
  });
});
