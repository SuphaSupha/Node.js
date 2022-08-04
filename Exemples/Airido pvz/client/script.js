"use strict";

fetch("http://localhost:8080/users")
  .then((res) => res.json())
  .then((data) => {
    const name = document.createElement("h2");
    name.textContent = "Users";
    document.body.append | name;

    const ul = document.createElement("ul");
    const div = document.createElement("div");
    div.className = "usersOutput";

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user;
      ul.append(li);
    });
    div.appendChild(ul);
    document.body.append(ul);
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
