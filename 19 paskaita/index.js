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
  database: "ecommerce",
  port: "25060",
};
// app.get("/fullorders/:id?", async (req, res) => {
//   try {
//     if (Number.isInteger(+req.params.id) || !req.params.id) {
//       const con = await mysql.createConnection(mysqlConfig);

//       const selectALL =
//         "SELECT orders.id, orders.customer_name, orders.customer_email, products.title, products.image, products.price AS fullOrder FROM ecommerce.orders LEFT JOIN ecommerce.products ON ecommerce.products.id=ecommerce.orders.product_id ";
//       const selectOne = `${selectALL} WHERE id=${req.params.id}`;
//       const response = await con.execute(req.params.id ? selectOne : selectALL);
//       res.send(response[0]);
//       await con.end();
//     } else {
//       res.status(400).send("error");
//     }
//   } catch (e) {
//     if (e.code === "ER_ACCESS_DENIED_ERROR")
//       res.status(401).send("Unauthorized");
//     console.log(e);
//   }
// });
//5
app.get("/fullorders", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute(
      "SELECT orders.id, orders.customer_name, orders.customer_email, products.title, products.image, products.price AS fullOrder FROM ecommerce.orders LEFT JOIN ecommerce.products ON ecommerce.products.id=ecommerce.orders.product_id "
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
//4
app.get("/products/:id?", async (req, res) => {
  try {
    if (Number.isInteger(+req.params.id) || !req.params.id) {
      const con = await mysql.createConnection(mysqlConfig);

      const selectALL = `SELECT * FROM products`;
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
//3
app.post("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute(
      `INSERT INTO products (title,image,price) values('${req.body.title}','${req.body.image}',${req.body.price})`
    );
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
//3
app.get("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const response = await con.execute("SELECT * FROM products");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});
//3
app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    res.send("Success");
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
