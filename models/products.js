const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  title: String,
  location: String,
  image: String,
  price: Number,
  stock: Number,
  description: String,
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
