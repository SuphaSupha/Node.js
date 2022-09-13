var express = require("express");
var router = express.Router();

const mysql = require("mysql2/promise");

const { dbconfig } = require("../../config");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    page: "Home",
    menuId: "home",
    name: "Edvinas",
    age: "30",
    email: "edvis123@gmail.com",
  });
});

router.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute("SELECT * FROM medications");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
