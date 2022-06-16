// Import express to create express routers
const express = require('express');
const app = require('../app');

// Create an express router
const productRouter = express.Router();

// Import product controllers
const productController = require('../controllers/productControllers');

// Base route
productRouter
  .route('/products/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);
productRouter.route('/products/new').get(productController.newProduct);
productRouter
  .route('/products/:id')
  .get(productController.showProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);
productRouter.route('/products/:id/edit').get(productController.editProduct);

// Export router to be used in other parts of the application
module.exports = productRouter;
