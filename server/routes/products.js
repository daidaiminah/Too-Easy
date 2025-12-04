const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get all products
router.get('/', productController.getAllProducts);

// Get product by slug
router.get('/:slug', productController.getProductBySlug);

// Get products by category
router.get('/category/:category', productController.getProductsByCategory);

// Admin routes
// Create a new product
router.post('/', 
  authMiddleware.protect, 
  authMiddleware.restrictTo('admin'), 
  productController.createProduct
);

// Update product
router.put('/:id', 
  authMiddleware.protect, 
  authMiddleware.restrictTo('admin'), 
  productController.updateProduct
);

// Delete product
router.delete('/:id', 
  authMiddleware.protect, 
  authMiddleware.restrictTo('admin'), 
  productController.deleteProduct
);

module.exports = router;
