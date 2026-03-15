const Product = require('../models/Product');

// @desc Get all products
// @route GET /api/products
exports.getProducts = async (req, res) => {
  const products = await Product.find({}).sort('-createdAt');
  res.json({ success: true, products });
};

// @desc Get product by id
// @route GET /api/products/:id
exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json({ success: true, product });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
};

// @desc Create product (admin)
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
};

// @desc Update product (admin)
exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (product) {
    res.json({ success: true, product });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
};

// @desc Delete product (admin)
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.json({ success: true, message: 'Product deleted' });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
};

