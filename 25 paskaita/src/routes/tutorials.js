// const express = require("express");
// const mysql = require("mysql2/promise");
// const jwt = require("jsonwebtoken");

// const { dbconfig, jwtSecret } = require("../config");

// const router = express.Router();

// const { isLoggedIn } = require("../mid");

// router.get("/user-tutorials/:id", isLoggedIn, async (req, res) => {
//   try {
//     const id = req.paramas.id;
//     const con = await mysql.createConnection(dbconfig);
//     const [response] = await con.execute(
//       `SELECT * FROM tutorials WHERE user_id=${id}`
//     );
//     await con.end();
//     return res.send(response);
//   } catch (e) {
//     return res.status(400).send({ error: "Error" });
//   }
// });
// router.get("/", async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1] || "";
//     const user = jwt.verify(token, jwtSecret);
//     console.log(user);
//     if (user) {
//       const con = await mysql.createConnection(dbconfig);
//       const [response] = await con.execute(`SELECT * FROM tutorials `);
//       await con.end();
//       return res.send(response);
//     } else {
//       console.error(error);
//     }
//   } catch (e) {
//     return res.status(400).send({ error: "Error" });
//   }
// });

// module.exports = router;

const express = require("express");
const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");

const { dbconfig, jwtSecret } = require("../config");
const { isLoggedIn, isAuth } = require("../mid");

const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(
      `INSERT INTO tutorials (user_id, title, content) VALUES (${mysql.escape(
        userId
      )}, ${mysql.escape(req.body.title)}, ${mysql.escape(req.body.content)})`
    );
    res.send(data);
    await con.end();
  } catch (err) {
    res.status(400).send({ err: "Error" });
  }
});

router.get("/user-tutorials/:id", isLoggedIn, async (req, res) => {
  try {
    const id = req.params.id;
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      `SELECT * FROM tutorials WHERE user_id=${id}`
    );
    await con.end();
    return res.send(response);
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const userId = req.user.id;

    console.log(userId);

    const con = await mysql.createConnection(dbConfig);

    const [data] = await con.execute(
      `INSERT INTO tutorials (user_id, title, content) VALUES (${mysql.escape(
        userId
      )}, ${mysql.escape(req.body.title)}, ${mysql.escape(req.body.content)})`
    );

    res.send(data);

    await con.end();
  } catch (err) {
    res.status(400).send({ err: "Error" });
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     const isAuthenticated = await isAuth(req);
//     const con = await mysql.createConnection(dbConfig);
//     const [data] = await con.execute(
//       `SELECT * FROM tutorials ${isAuthenticated ? "" : "WHERE private = 0"}`
//     );
//     res.send(data);
//     await con.end();
//   } catch (err) {
//     res.status(400).send({ err: "Error" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const user = jwt.verify(token, jwtSecret);
    if (user) {
      const con = await mysql.createConnection(dbconfig);
      const [response] = await con.execute(`SELECT * FROM tutorials`);
      await con.end();
      res.send(response);
    } else {
      console.log("Not connected");
    }
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

module.exports = router;
