const express = require("express");
const router = express.Router();

const {
  createOrder,
  getUserOrders,
  getOrders,
  updateOrder
} = require("../controllers/orderController");

const { protect, admin } = require("../middleware/auth");

router.post("/", protect, createOrder);

router.get("/:userId", protect, getUserOrders);

router.get("/", protect, admin, getOrders);

router.put("/:id", protect, admin, updateOrder);

module.exports = router;