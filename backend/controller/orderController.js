const Order = require("../models/orderModel");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      msg: "Success",
      orders,
    });
  } catch (err) {
    res.status(404).json({
      message: "Error while geeting resposne",
      err,
    });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json({
      msg: "Successfully placed order",
      order,
    });
  } catch (err) {
    res.status(404).json({
      message: "Error while creating order",
      err,
    });
  }
};
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);
    res.status(200).json({
      msg: "Success",
      order,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Error while geeting resposne",
      err,
    });
  }
};
