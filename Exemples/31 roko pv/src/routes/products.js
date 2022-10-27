const express = require("express");
const mysql = require("mysql2/promise");

const { dbconfig } = require("../config");

const router = express.Router();

//1 ed
// router.get("/", async (req, res) => {
//   try {
//     const con = await mysql.createConnection(dbconfig);
//     const [response] = await con.execute("SELECT * FROM products");
//     res.send(response);
//     await con.end();
//   } catch (e) {
//     console.error(e);
//   }
// });
//2ed
router.get("/:id?", async (req, res) => {
  try {
    if (Number.isInteger(+req.params.id) || !req.params.id) {
      const con = await mysql.createConnection(dbconfig);
      const selectAll = "SELECT * FROM products";
      const selectOne = `${selectAll} WHERE id=${req.params.id}`;
      const [response] = await con.execute(
        req.params.id ? selectOne : selectAll
      );
      res.send(response);
      await con.end();
    } else {
      res.status(400).send("help me");
    }
  } catch (e) {
    console.error(e);
  }
});

//3.1
router.get("/discountPercentage/highest", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      "SELECT * FROM products ORDER BY discountPercentage DESC"
    );
    res.send(response);
    await con.end();
  } catch (e) {
    console.error(e);
  }
});
//3.2
router.get("/discountPercentage/lowest", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      "SELECT * FROM products ORDER BY discountPercentage ASC"
    );
    res.send(response);
    await con.end();
  } catch (e) {
    console.error(e);
  }
});

//4
router.get("/total_price/sum", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      "SELECT SUM(price) AS Total_price FROM products"
    );
    res.send(response);
    await con.end();
  } catch (e) {
    console.error(e);
  }
});

//5
router.post("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const data = req.body;
    const response = await con.execute(
      `INSERT INTO products (title, description, price, discountPercentage, rating, stock,brand, category,thumbnail,images) values(${con.escape(
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
    await con.end();
  } catch (e) {
    console.error(e);
  }
});
module.exports = router;
