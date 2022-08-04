const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

let users, links;
//users
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  users = req.body;
  res.send(users);
});

//links
app.get("/links", (req, res) => {
  res.send(links);
});

app.post("/links", (req, res) => {
  links = req.body;
  res.send(links);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
