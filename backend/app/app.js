const express = require("express");
const app = express();
const routes = require("../routes/index");
const cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(require("./middleware"));
app.use(routes);
app.use(bodyParser.json());

module.exports = app;
