fetch("http://localhost:3001/names")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    const ul = document.createElement("ul");
    response.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} ${user.surname}`;
      ul.append(li);
    });

    document.body.append(ul);
  })
  .catch((err) => {
    console.error(err);
  });
