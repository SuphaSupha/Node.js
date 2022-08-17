const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const URI = `mongodb+srv://SuphaSupha:77799213dD@cluster0.ssqyfz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URI);

app.get("/pets", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("pets1").find().toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send(err);
  }
});
app.post("/pets", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("pets1").insertOne({
      name: req.body.name,
      type: req.body.type,
      age: req.body.age,
    });
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send(err);
  }
});

app.get("/pets/:type/:order?", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("pets1")
      .find({ type: { $in: req.params.types?.split(",") } })
      .sort({ age: req.params.order?.toLocaleLowerCase() === "dsc" ? -1 : 1 })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
