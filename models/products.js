const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  title: String,
  location: String,
  image: String,
  price: Number,
  stock: Number,
  description: String,
});

const products = mongoose.model('products', productsSchema);

module.exports = products;
