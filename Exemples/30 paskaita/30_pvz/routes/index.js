const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

const { dbConfig } = require("../views/config");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(`SELECT * FROM bars`);
    res.render("index", {
      page: "Home",
      menuId: "home",
      bars: data,
    });

    await con.end();
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

module.exports = router;
