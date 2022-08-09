const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('LAbas');
});

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`),
);
