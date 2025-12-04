const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get user orders - accessible by authenticated users
router.get('/my-orders', 
  authMiddleware.protect, 
  orderController.getUserOrders
);

// Create a new order
router.post('/', 
  authMiddleware.protect, 
  orderController.createOrder
);

// Get order by ID - accessible by owner or admin
router.get('/:id', 
  authMiddleware.protect, 
  orderController.getOrderById
);

// Admin routes
// Get all orders - admin only
router.get('/', 
  authMiddleware.protect, 
  authMiddleware.restrictTo('admin'), 
  orderController.getAllOrders
);

// Update order status - admin only
router.patch('/:id/status', 
  authMiddleware.protect, 
  authMiddleware.restrictTo('admin'), 
  orderController.updateOrderStatus
);

module.exports = router;
