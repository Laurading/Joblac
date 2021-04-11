var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var port = 3333;
var userRoutes = require("./src/routes/user");
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", userRoutes);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
module.exports = app;
