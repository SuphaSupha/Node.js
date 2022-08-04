const names = [];
const links = [];

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#firstName").value;
  if (name) {
    names.push(name);

    const message = document.querySelector(".message");
    message.textContent = `User:${name} successfully added`;
    message.classList.remove("hidden");
    setTimeout(() => {
      message.classList.add("hidden");
    }, 2000);

    document.querySelector("#firstName").value = "";

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(names),
    });
  }
});
