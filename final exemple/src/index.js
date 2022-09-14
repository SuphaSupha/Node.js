const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
const { PORT, dbconfig } = require("./config");
const products = require("./routes/products");
app.use(express.json());
app.use(cors());

app.use("/products/", products);

app.all("*", async (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
