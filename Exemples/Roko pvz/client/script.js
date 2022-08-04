fetch("http://localhost:3000/names")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    const ul = document.createElement("ul");
    response.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      ul.append(li);
    });

    document.body.append(ul);
  })
  .catch((err) => {
    console.error(err);
  });
