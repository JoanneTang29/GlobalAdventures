const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the home page');
});

//products/
app.get('/products/', (req, res) => {
  res.send('This is the products page');
});

const port = 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}...`);
});
