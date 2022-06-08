const mongoose = require("mongoose");
//const User = require("./users.model");
//const Stock = require("./product/stockModel");
const moment = require("moment");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        /* ref: "User", */
    },
    stock: {
        type: mongoose.Schema.ObjectId,
        description:
            "store the productId, named stock but for mutual-fund and FD also.",
        /* ref: "Stock", */
    },
    name: {
        type: String,
        description: "name of the company",
    },
    type: {
        type: String,
        description: "Stock/Mutual-Fund/Fixed-Deposit",
    },
    quantity: {
        type: String,
        description:
            "no. of shares for stocks,rate of interest for mutual-fund/FD",
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

/* orderSchema.pre(/^find/, function (next) {
  this.populate("stock user", "name email");
  next();
}); */

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
