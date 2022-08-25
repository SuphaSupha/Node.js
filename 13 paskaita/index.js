const express = require("express");
const mysql = require("mysql2/promise");
const PORT = 8080;
const app = express();

app.use(express.json());

const mysqlConfig = {
  host: "mysql-do-user-12295529-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_4Vmvt166LbQrA0BGclW",
  database: "defaultdb",
  port: "25060",
};
//2.1 paziuret roko pvz
app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    con.execute(
      "CREATE TABLE defaultdb.shirts(id int, brand varchar(255), model varchar(255), size varchar(255), price decimal(2), primary key (id))"
    );
    res.send("Success");
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
//2.2
//3
app.get("/shirts", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    console.log("Success: " + con);

    const limit = req.query.limit;
    const response = await con.execute(
      `SELECT * FROM shirts ORDER BY price ASC LIMIT 3
      Where size =${limit}`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

//2.3

app.post("/shirts", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const shirt = req.body; //{brand: "", model: "", size: "", price: 11 }

    const response = await con.execute(
      `INSERT INTO defaultdb.shirts (brand, model, size, price) values ('${req.body.brand}', '${req.body.model}', '${req.body.size}', ${req.body.price});`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

//2.4
app.get("*", async (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
