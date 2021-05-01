const { Router } = require("express");
const routes = Router();
const service = require("./service")

  routes.get("/destinos", (req, res) => {
      const pref = req.query.place
    return res.json(service.destinations(pref))
  });

  module.exports = routes;
  