// import the model
const Products = require('../models/products');

// Refactor route controllers
exports.home = async (req, res) => {
  try {
    const products = await Products.find({});
    res.render('products/Home', { products });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check home',
      message: error,
    });
  }
};

// Retrieve all products at once
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.render('products/Index', { products });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check getAllProducts',
      message: error,
    });
  }
};

// Retrieve single product/show page
exports.showProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.render('products/Show', { product });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check showProduct',
      message: error,
    });
  }
};

// Initiate a form request to create a new product
exports.newProduct = (req, res) => {
  try {
    res.render('products/New');
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check newProduct',
      message: error,
    });
  }
};

// Creates a new product
exports.createProduct = async (req, res) => {
  try {
    console.log('post for new form', req.body);
    const product = new Products(req.body.product);
    console.log('product info', product);
    await product.save();
    res.redirect('/products');
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check createCourse',
      message: error,
    });
  }
};

// Edit a single product
exports.editProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.render('products/Edit', product);
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check editProduct',
      message: error,
    });
  }
};

// Initiates a form request to update a single product
exports.updateProduct = async (req, res) => {
  try {
    console.log('update products', req.body.product);
    const product = await Products.findByIdAndUpdate(
      req.params.id,
      req.body.product
    );
    res.redirect(`/products/${product._id}`);
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check updateProduct',
      message: error,
    });
  }
};

// Initiates a form request to delete a single product
exports.deleteProduct = async (req, res) => {
  try {
    console.log('deleted');
    const product = await Products.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (error) {
    res.status(500).json({
      status: 'ERROR check deleteProduct',
      message: error,
    });
  }
};
