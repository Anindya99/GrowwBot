const mongoose = require("mongoose");
const User = require("./users.model");
const Stock = require("./product/stockModel");
const moment = require("moment");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  stock: {
    type: mongoose.Schema.ObjectId,
    ref: "Stock",
  },
  quantity: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 1003423,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.pre(/^find/, function (next) {
  this.populate("stock user", "name email");
  next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
