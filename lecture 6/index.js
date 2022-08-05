const express = require("express");
// const cors = require("cors");
const app = express();
require("dotenv").config();

const name = "Hello";
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server is running on port ${port}`));
