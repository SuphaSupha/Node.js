const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

const { dbconfig } = require("../config/config");

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute("SELECT * FROM bars");
    await con.end();
    res.render("index", { header: "Most popular bars", bars: response });
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
