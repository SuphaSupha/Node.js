const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const URI = `mongodb+srv://SuphaSupha:${process.env.PASSWORD}@cluster0.ssqyfz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URI);

app.get("/", async (req, res) => {
  try {
    const con = await client.connect(); // atidarom
    const data = await con.db("demo1").collection("cars").find().toArray(); // pasiimam
    await con.close(); //uz(darom
    res.send(data);
  } catch (error) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("cars")
      .insertOne({ brand: "VW", model: "pasiutelis" });
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`)
);
