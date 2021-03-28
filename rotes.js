const express = require("express");
const routes = express.Router();
const service = require("./service")

routes.get("/hellow", (req, res) => {
    return res.send("Hello world");
  });

  routes.post("/destinos", (req, res) => {

    return res.send("Hello world");
  });

  module.exports = routes;
  