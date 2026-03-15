const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      name: String,
      price: Number,
      quantity: Number
    }
  ],

  totalPrice: {
    type: Number,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Processing"
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);