const express = require('express');
const { addToCart, getCart, deleteCartItem } = require('../controllers/cartController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/add', protect, addToCart);
router.get('/:userId', protect, getCart);
router.delete('/:id', protect, deleteCartItem);

module.exports = router;

