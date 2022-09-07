const express = require("express");
const cors = require("cors");

const { PORT } = require("./config");
const { auth, articles } = require("./routes/");

const app = express();

app.use(express.json());
app.use(cors());
// app.use('/v1/content/', content);
app.use("/auth/", auth);
app.use("/articles/", articles);

app.get("/", (req, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
