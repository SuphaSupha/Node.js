const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const names = ["Edvinukas"];

app.get("/names", (req, res) => {
  console.log("hello");
  res.send(names);
});

app.post("/names", (req, res) => {
  console.log(req.body);
  names.push(req.body.name);
  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
