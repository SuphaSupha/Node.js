const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

const names = ["Edvinukas"];

app.get("/names", (req, res) => {
  res.send(names);
  console.log(names);
});

app.post("/names", (req, res) => {
  console.log(req.body);
  names.push(req.body.name);
  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
