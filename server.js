// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory.
app.use(express.static(path.join(__dirname, 'public')));

// (Optional) for an API

app.listen(port, () => {
  console.log(`Fuzzy Skin Webapp is listening at http://localhost:${port}`);
});
