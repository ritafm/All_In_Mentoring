const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

// We neeed to build the folder tree 
// Paste everything besides server.js into the client folder

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});