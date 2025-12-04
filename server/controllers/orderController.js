const { Order, OrderItem, Product, User } = require('../models');
const { sequelize } = require('../models');

// Create a new order
exports.createOrder = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      shippingMethod,
      totalAmount
    } = req.body;

    // Generate unique order number
    const orderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    // Create order
    const order = await Order.create({
      userId: req.user.id,
      orderNumber,
      totalAmount,
      shippingAddress,
      paymentMethod,
      shippingMethod,
      status: 'pending',
      paymentStatus: 'pending'
    }, { transaction });

    // Create order items and update product stock
    for (const item of orderItems) {
      const product = await Product.findByPk(item.productId, { transaction });
      
      if (!product) {
        await transaction.rollback();
        return res.status(404).json({ message: `Product with ID ${item.productId} not found` });
      }

      if (product.stock < item.quantity) {
        await transaction.rollback();
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }

      // Create order item
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
        size: item.size,
        color: item.color
      }, { transaction });

      // Update product stock
      await product.update({
        stock: product.stock - item.quantity
      }, { transaction });
    }

    await transaction.commit();

    res.status(201).json({
      message: 'Order created successfully',
      order: {
        id: order.id,
        orderNumber: order.orderNumber,
        totalAmount: order.totalAmount,
        status: order.status
      }
    });
  } catch (error) {
    await transaction.rollback();
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
      include: [{
        model: Product,
        through: {
          attributes: ['quantity', 'price', 'size', 'color']
        }
      }]
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const order = await Order.findByPk(id, {
      include: [{
        model: Product,
        through: {
          attributes: ['quantity', 'price', 'size', 'color']
        }
      }]
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if user is owner or admin
    if (order.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to access this order' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all orders (admin only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      order: [['createdAt', 'DESC']],
      include: [{
        model: User,
        attributes: ['id', 'name', 'email']
      }]
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Get all orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update order status (admin only)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, trackingNumber } = req.body;
    
    const order = await Order.findByPk(id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    const updateData = { status };
    if (trackingNumber) {
      updateData.trackingNumber = trackingNumber;
    }
    
    await order.update(updateData);
    
    res.status(200).json({
      message: 'Order status updated successfully',
      order
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
