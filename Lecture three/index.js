const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 3001;

//"/"- base path(pagrindinis kelias) pvz: localhost:3000/
// req - kvietimas is vartotojo puses.
// res - response. grazinimas is serverines dalies.

app.get("/", (req, res) => {
  res.send(["Bmw", "Audi", "VW"]);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
