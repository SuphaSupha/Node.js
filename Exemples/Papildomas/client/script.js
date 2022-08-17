fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((resp) => {
    console.log(resp);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resp),
    };
    fetch("http://localhost:8080/posts", options)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
