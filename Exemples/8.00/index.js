const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

const URI = `mongodb+srv://SuphaSupha:${process.env.PASSWORD}@cluster0.ssqyfz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URI);
//1
app.get("/pets", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("pets1").find().toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ err });
  }
});
//2
// app.post("/pets", async (req, res) => {
//   try {
//     const con = await client.connect();
//     const data = await con
//       .db("demo1")
//       .collection("pets1")
//       .insertOne({ name: "Kleckas", type: "cat", age: "8" });
//     await con.close();
//     return res.send(data);
//   } catch (err) {
//     res.status(500).send({ err });
//   }
// });
app.post("/pets", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("pets1").insertOne(req.body);
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});
//3
app.get("/pets/:type", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("pets1")
      .find({ type: req.params.type })
      .toArray();
    1;
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});
//4
app.get("/petsOldest", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("pets1")
      .find()
      .sort({ age: 1 })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`)
);
