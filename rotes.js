const express = require("express");
const routes = express.Router();
const service = require("./service")

  routes.get("/destinos", (req, res) => {
      var pref = req.query['preferencia']
    return res.json(service.destinations(pref))
  });

  module.exports = routes;
  