const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();

// Routes

// Home Page
router.get('/', function (request, response) { 

 });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});