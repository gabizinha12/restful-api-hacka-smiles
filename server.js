const express = require("express");
const routes = require("./rotes.js");
const app = express();

var port = process.env.PORT || 3000
app.use(routes);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);