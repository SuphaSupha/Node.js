const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

let users = [];
//1
app.get("/posts", (req, res) => {
  res.send(users);
});

//4
app.get("/posts/title/:model", (req, res) => {
  users = req.body;
  res.send(users);
});

//5
app.post("/addedUsers", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
});

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`)
);
