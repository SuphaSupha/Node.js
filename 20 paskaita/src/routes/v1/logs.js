const express = require("express");
const mysql = require("mysql2/promise");

const { dbconfig } = require("../../config");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const query = req.params.id ? `WHERE logs.id = ${req.params.id}` : "";
    const response = await con.execute(
      `SELECT logs.pet_id, logs.description, pets.name, pets.dob AS loghistory FROM logs LEFT JOIN pets ON pets.id=logs.pet_id ${query}`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute("SELECT * FROM logs");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute(
      `INSERT INTO logs (pet_id,description,status) values('${req.body.pet_id}','${req.body.description}','${req.body.status}')`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
