const express = require('express');
const PORT = process.env.PORT || 3001;
const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
// Connect to the Mongo DB
// if we are working in a production enviorment this connects to our mongo db with moongoose and if it doesn't exist it will create it.


// Home Page
// router.get('/', function (request, response) { 

//  });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
