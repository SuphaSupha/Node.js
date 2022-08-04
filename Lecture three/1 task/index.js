const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const brand = ["MINI", "BMW", "AUDI"];

app.get("/", (req, res) => {
  res.send(brand);
});

app.post("/", (req, res) => {
  console.log(req, body);
  brand.push(req.body.car);
  res.send(req.body);
});

app.listen(3002, () => console.log(`server is running on:${3002}`));
