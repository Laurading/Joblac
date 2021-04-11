const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3333;
const userRoutes = require("./src/routes/user");

const app = express();
//app.use(cors());
app.use(bodyParser.json());
app.use(cors);

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
