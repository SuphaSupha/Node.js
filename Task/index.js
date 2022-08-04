const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars/:model", (req, res) => {
  res.send(cars[req.params.model]);
});

app.listen(PORT, () =>
  console.log(`Server is sunning on: http://localhost:${PORT}`)
);
