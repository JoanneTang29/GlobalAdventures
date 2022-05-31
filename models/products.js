const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  title: String,
  location: String,
  image: String,
  price: Number,
  stock: Number,
  description: String,
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
