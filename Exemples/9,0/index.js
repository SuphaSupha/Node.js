const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

const URI = `mongodb+srv://SuphaSupha:77799213dD@cluster0.ssqyfz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URI);

const orders = [
  { product: "toothbrush", total: 4.75, customer: "Mike" },
  { product: "guitar", total: 199.99, customer: "Tom" },
  { product: "milk", total: 11.33, customer: "Mike" },
  { product: "pizza", total: 8.5, customer: "Karen" },
  { product: "toothbrush", total: 4.75, customer: "Karen" },
  { product: "pizza", total: 4.75, customer: "Dave" },
  { product: "toothbrush", total: 4.75, customer: "Mike" },
];

app.get("/spent/:customer", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("orders")
      .aggregate([
        { $match: { customer: req.params.customer } },
        { $group: { _id: "$product", total: { $sum: "$total" } } },
        { $sort: { total: -1 } },
      ])
      .toArray();

    await con.close();
    res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("orders").find().toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

app.get("/count/:product", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("orders")
      .countDocuments({ product: req.params.product });
    await con.close();
    res.send({ count: data });
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

app.get("/many", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("orders").insertMany(orders);
    await con.close();
    res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`)
);
