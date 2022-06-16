const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const Products = require('./models/products');
const productRoutes = require('./routes/productRoute');
const Calendar = require('react-calendar');

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Create middleware to handle routes
app.use('/', productRoutes);

// // Index page
// app.get('/products/', async (req, res) => {
//   const products = await Products.find({});
//   res.render('products/Index', { products });
// });

// // New products page
// app.get('/products/new', (req, res) => {
//   res.render('products/New');
// });

// // Create a new product
// app.post('/products/', async (req, res) => {
//   console.log('post for new form', req.body);
//   const product = new Products(req.body.product);
//   console.log('product info', product);
//   await product.save();
//   res.redirect('/products');
// });

// // Show Product
// app.get('/products/:id', async (req, res) => {
//   const product = await Products.findById(req.params.id);
//   res.render('products/Show', { product });
// });

// // Edit Page
// app.get('/products/:id/edit', async (req, res) => {
//   // console.log('edit page', req.params.id);
//   const product = await Products.findById(req.params.id);
//   res.render('products/Edit', product);
// });

// // Update product
// app.put('/products/:id', async (req, res) => {
//   console.log('update products', req.body.product);
//   const product = await Products.findByIdAndUpdate(
//     req.params.id,
//     req.body.product
//   );
//   res.redirect(`/products/${product._id}`);
// });

// // Delete product
// app.delete('/products/:id', async (req, res) => {
//   console.log('deleted');
//   const product = await Products.findByIdAndDelete(req.params.id);
//   res.redirect('/products');
// });

// //Adding new branch

module.exports = app;
