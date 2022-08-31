const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
const { PORT, dbconfig } = require("./config");
const { pets, medications, logs, prescriptions } = require("./routes/v1");
app.use(express.json());
app.use(cors());

app.use("/v1/pets/", pets);
app.use("/v1/medications/", medications);
app.use("/v1/logs/", logs);
app.use("/v1/prescriptions", prescriptions);

app.get("*", async (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
