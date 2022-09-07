const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const fetch = require("node-fetch");

const { PORT, dbconfig } = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
// // app.use('/v1/content/', content);
// app.use("/auth/", auth);
// app.use("/articles/", articles);

app.get("/", async (req, res) => {
  try {
    const randomUsers = await fetch("https://randomuser.me/api/");
    const randomUsersResponse = await randomUsers.json();
    const firstName = randomUsersResponse.results[0].name.first;

    const con = await mysql.createConnection(dbconfig);
    await con.execute(
      `INSERT INTO names (name) VALUES (${mysql.escape(firstName)})`
    );
    const [response] = await con.execute("SELECT * FROM names");
    await con.end();
    res.send(response);
  } catch (e) {
    return res.status(400).send({ error: "Error" });
  }
});

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
