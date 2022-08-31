const express = require("express");
const mysql = require("mysql2/promise");

const { dbconfig } = require("../../config");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const query = req.params.id
      ? `WHERE prescriptions.id = ${req.params.id}`
      : "";
    const response = await con.execute(
      `SELECT *  FROM prescriptions LEFT JOIN medications ON medications.id=prescriptions.medication_id ${query}`
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
    const response = await con.execute("SELECT * FROM prescriptions");
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
      `INSERT INTO prescriptions (medication_id,pet_id,comment) values('${req.body.medication_id}','${req.body.pet_id}','${req.body.comment}')`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
