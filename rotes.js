const express = require("express");
const routes = express.Router();

routes.get("/hellow", (req, res) => {
    return res.send("Hello world");
  });

  module.exports = routes;
  