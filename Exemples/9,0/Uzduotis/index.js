const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

const URI = `mongodb+srv://SuphaSupha:77799213dD@cluster0.ssqyfz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
