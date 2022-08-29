const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
require("dotenv").config();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const mysqlConfig = {
  host: "mysql-do-user-12295529-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_4Vmvt166LbQrA0BGclW",
  database: "auto_park",
  port: "25060",
};

// const mysqlConfig = {
//   host: process.env.MY_SQL_HOST,
//   user: process.env.MY_SQL_USER,
//   password: process.env.MY_SQL_PASSWORD,
//   database: process.env.MY_SQL_DATABASE,
//   port: process.env.MY_SQL_PORT,
// };
//1
app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    res.send("Success");
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.get("/cars/:id?", async (req, res) => {
  try {
    if (Number.isInteger(+req.params.id) || !req.params.id) {
      const con = await mysql.createConnection(mysqlConfig);

      const selectALL = `SELECT * FROM cars`;
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

app.post("/cars", async (req, res) => {
  try {
    const car = req.body;
    if (car.title && car.image && car.price && car.numberplates) {
      const con = await mysql.createConnection(mysqlConfig);
      const response = await con.execute(
        `INSERT INTO cars (title, image, price, numberplates) values (${con.escape(
          car.title
        )}, ${con.escape(car.image)}, ${con.escape(car.price)}, ${con.escape(
          car.numberplates
        )})`
      );
      res.send(response[0]);
      await con.end();
    } else {
      res.status(400).send("Bad syntax");
    }
  } catch (e) {
    console.log(e);
  }
});

app.delete("/cars/:id", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute(
      `DELETE FROM cars WHERE id=${req.params.id}`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.get("*", async (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
