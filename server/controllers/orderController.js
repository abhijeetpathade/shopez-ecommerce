const Order = require('../models/Order');

// @desc Create order
// @route POST /api/orders
exports.createOrder = async (req, res) => {
  const { userId, products, totalPrice, address } = req.body;
  const order = await Order.create({ userId, products, totalPrice, address });
  res.status(201).json({ success: true, order });
};

// @desc Get user orders
// @route GET /api/orders/:userId
exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId }).populate('products.productId').sort('-createdAt');
  res.json({ success: true, orders });
};

// @desc Get all orders (admin)
exports.getOrders = async (req, res) => {
  const orders = await Order.find({}).populate('userId', 'username email').populate('products.productId').sort('-createdAt');
  res.json({ success: true, orders });
};

// @desc Update order status (admin)
exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('products.productId');
  if (order) {
    res.json({ success: true, order });
  } else {
    res.status(404).json({ success: false, message: 'Order not found' });
  }
};

