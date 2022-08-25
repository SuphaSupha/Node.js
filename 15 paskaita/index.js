const express = require("express");
const mysql = require("mysql2/promise");
const PORT = 8080;
const app = express();

app.use(express.json());

const mysqlConfig = {
  host: "mysql-do-user-12295529-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_4Vmvt166LbQrA0BGclW",
  database: "products",
  port: "25060",
};
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
//2
app.get("/items", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute("SELECT * FROM items");

    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

// //5
// app.get("/items", async (req, res) => {
//   try {
//     const con = await mysql.createConnection(mysqlConfig);

//     const limit = req.query.limit;
//     console.log(limit);
//     const response = await con.execute(`SELECT * FROM items LIMIT ${limit}`);

//     // console.log(mysql.escape("Rokas"));
//     // console.log("Rokas");

//     res.send(response[0]);
//     await con.end();
//   } catch (e) {
//     console.log(e);
//   }
// });

3;
app.post("/items", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const response = await con.execute(
      `INSERT INTO products.items (title) values ("${req.body.title}");`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

//6

app.get("*", async (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
