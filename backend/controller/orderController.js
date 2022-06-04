const Order = require("../models/orderModel");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({user:req.params.userId}).sort({date:-1});
    return res.status(200).json({
      msg: "Success",
      orders,
    });
  } catch (err) {
    return res.status(404).json({
      message: "Error while geeting resposne",
      err,
    });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    return res.status(200).json({
      msg: "Success",
      order
    });
  } catch (err) {
    return res.status(404).json({
      message: "Error while creating order",
      err,
    });
  }
};
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);
    return res.status(200).json({
      msg: "Success",
      order,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: "Error while geeting resposne",
      err,
    });
  }
};
