const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars/:model", (req, res) => {
  console.log(req.params.model);
  const carsfilter = req.params.model.toLowerCase();
  res.send(cars[carsfilter]);
});

app.listen(PORT, () =>
  console.log(`server is running on: http://localhost:${PORT}`)
);
