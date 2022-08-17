const express = require("express"); // importas
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("bson");

const app = express(); // sukuriama aplikacija
const PORT = process.env.PORT || 8080;

const URI = `mongodb+srv://SuphaSupha:77799213dD@cluster0.ssqyfz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());
//1
app.get("/users", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo2").collection("users").find().toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

//2
app.post("/users", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo2").collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
    });
    await con.close();
    return res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

//3

app.get("/comments", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo2")
      .collection("users")
      .aggregate([
        {
          $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "user_id",
            as: "customer_details",
          },
        },
      ])
      .toArray();
    await con.close();
    return res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

//4

app.delete("/comments/:id", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo2")
      .collection("comments")
      .deleteOne({ _id: ObjectId(req.params.id) });
    await con.close();
    return res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo2")
      .collection("users")
      .deleteOne({ _id: ObjectId(req.params.id) });
    await con.close();
    return res.send(data);
  } catch (error) {
    res.sendStatus(500).send({ error });
  }
});

// app.delete("/users/:email", async (req, res) => {
//   try {
//     const con = await client.connect();
//     const data = await con
//       .db("demo2")
//       .collection("users")
//       .deleteOne({ email: req.params.email });
//     await con.close();
//     return res.send(data);
//   } catch (error) {
//     res.sendStatus(500).send({ error });
//   }
// });

app.listen(PORT, () =>
  console.log(`Server is running: http://localhost:${PORT}`)
);
