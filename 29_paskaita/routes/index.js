const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

const { dbconfig } = require("../config/config");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute("SELECT * FROM articles");
    console.log(response);
    await con.end();
    console.log(con);
    res.render("index", { header: "Blog by Edvinule", articles: response });
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
