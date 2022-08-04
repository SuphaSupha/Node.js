const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(8080, () => console.log("The server is running on port 8080"));
