const Cart = require('../models/Cart');

// @desc Add to cart
// @route POST /api/cart/add
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const existing = await Cart.findOne({ userId, productId });
  if (existing) {
    existing.quantity += quantity || 1;
    await existing.save();
    res.json({ success: true, cart: existing });
  } else {
    const cart = await Cart.create({ userId, productId, quantity });
    res.status(201).json({ success: true, cart });
  }
};

// @desc Get cart by user
// @route GET /api/cart/:userId
exports.getCart = async (req, res) => {
  const carts = await Cart.find({ userId: req.params.userId }).populate('productId');
  res.json({ success: true, cart: carts });
};

// @desc Delete cart item
// @route DELETE /api/cart/:id
exports.deleteCartItem = async (req, res) => {
  const cart = await Cart.findByIdAndDelete(req.params.id);
  if (cart) {
    res.json({ success: true, message: 'Item removed from cart' });
  } else {
    res.status(404).json({ success: false, message: 'Cart item not found' });
  }
};

