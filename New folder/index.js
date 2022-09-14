const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
require("dotenv").config();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const mysqlConfig = {
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE,
  port: process.env.MY_SQL_PORT,
};

//1
app.get("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute("SELECT * FROM products ");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

//2
app.get("/products/:id?", async (req, res) => {
  try {
    if (Number.isInteger(+req.params.id) || !req.params.id) {
      const con = await mysql.createConnection(mysqlConfig);

      const selectALL = `SELECT * FROM products`;
      const selectOne = `${selectALL} WHERE id=${req.params.id}`;
      const response = await con.execute(req.params.id ? selectOne : selectALL);
      res.send(response[0]);
      await con.end();
    } else {
      res.status(400).send("error");
    }
  } catch (e) {
    if (e.code === "ER_ACCESS_DENIED_ERROR")
      res.status(401).send("Unauthorized");
    console.log(e);
  }
});
//3.1
app.get("/highest", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute(
      "SELECT * FROM products ORDER BY discountPercentage DESC"
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
//3.2
app.get("/lowest", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute(
      "SELECT * FROM products ORDER BY discountPercentage ASC"
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
//4
app.get("/sum", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute(
      " SELECT SUM(price) AS Total_price FROM products"
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

//5
app.post("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const data = req.body;
    const response = await con.execute(
      `INSERT INTO products (title, description, price, discountPercentage, rating, stock,brand, category,thumbnail,images) values (${con.escape(
        data.title
      )}, ${con.escape(data.description)}, ${con.escape(
        data.price
      )}, ${con.escape(data.discountPercentage)}, ${con.escape(
        data.rating
      )}, ${con.escape(data.stock)}, ${con.escape(data.brand)}, ${con.escape(
        data.category
      )}, ${con.escape(data.thumbnail)}, ${con.escape(data.images)})`
    );
    res.send(response[0]);
  } catch (e) {
    console.error(e);
  }
});

app.get("*", async (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
