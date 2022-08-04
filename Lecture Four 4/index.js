const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(express());
app.use(cors());

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  users = req.body;
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
