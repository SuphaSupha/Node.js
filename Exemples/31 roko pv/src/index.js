//1. sukurti package.json
//2. sukurti index.js
//3. suinstaliuoti packadzus
//4. i nodemon kaip dev moduli
//5. import reikiamus modulius
//6. sukonfiguruoti index faila
//7. susikofiguruotu config and .env failus
const express = require("express");
const cors = require("cors");
const products = require("./routes/products");
const { PORT, dbconfig } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products/", products);

app.all("*", async (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
