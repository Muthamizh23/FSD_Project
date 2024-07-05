const express = require("express");
const app = express();
const cors = require("cors");
const httpServer = require("http").Server(app);
const bodyParser = require("body-parser");
const constant = require("./constants.json");

const middlewares = [
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  }),
  bodyParser.json({
    limit: "50mb",
  }),
];
app.use(middlewares);

// enable cors
app.use(
  cors({
    origin: "*", // constant.host, //Website you wish to allow to connect
    methods: "GET,PUT,POST,DELETE", // Request methods you wish to allow
  })
);
app.options("*", cors());

// api routes
var routes = require("./config/routes");
app.use("/", routes);

const db = require("./database/index");
db.connect();

httpServer.listen(constant.port, function () {
  console.log("Blog is listening on port " + constant.port);
});
