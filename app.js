const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Products = require('./models/products');

// // Create a middleware to parse the request body
// app.use(express.json());

// // Create middleware to handle our routes
// app.use('/api/v1/products', productsRouter);

// // Create a variable to represent our data
// const globalDB = mongoose
//   .connect(process.env.DATABASE.replace('<password>', process.env.PASSWORD))
//   .then(() => {
//     console.log('Database up and running');
//   });

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// app.set('views', path.join(__dirname, 'views'));

//products/
app.get('/products/', async (req, res) => {
  const products = await Products.find({});
  res.render('products/Index', { products });
});

//products/new product page
app.get('/products/new', (req, res) => {
  res.render('products/New');
});

// Create a new product
app.post('/products/', async (req, res) => {
  const products = new Products(req.body.products);
  await products.save();
  res.redirect(`/products/${products._id}`);
});

// Show Product
app.get('/products/:id', async (req, res) => {
  const product = await Products.findById(req.params.id);
  res.render('products/Show', { product });
});

//products/:id/edit (get)
app.get('/products/:id/edit', async (req, res) => {
  console.log('edit page', req.params.id);
  const product = await Products.findById(req.params.id);
  res.render('products/Edit', product);
});

// Update product
app.put('/products/:id', async (req, res) => {
  console.log('update products');
  // const { id } = req.params;
  // const products = await Products.findByIdAndUpdate(id, {
  //   ...req.body.products,
  // });
  // res.redirect(`/products/${products._id}`);
});

// Delete product
app.delete('/products/:id', async (req, res) => {
  console.log('delete');
  const { id } = req.params;
  const products = await Products.findByIdAndDelete(id);
  res.redirect('/products');
});

module.exports = app;
