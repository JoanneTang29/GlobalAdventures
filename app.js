const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const Products = require('./models/products');
const productRoutes = require('./routes/productRoute');

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Create middleware to handle routes
app.use('/', productRoutes);

module.exports = app;
