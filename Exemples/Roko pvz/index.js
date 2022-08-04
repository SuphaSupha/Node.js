const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const names = ["Rokas"];

app.get("/names", (req, res) => {
  res.status = 200;

  res.send(names);
});

app.post("/names", (req, res) => {
  names.push(req.body.name);

  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`server is running on: http://localhost:${PORT}`)
);
