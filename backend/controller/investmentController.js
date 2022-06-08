const Order = require("../models/investmentModel");

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders =
            req.params.type === "all"
                ? await Order.find({ user: req.params.userId }).sort({
                      date: -1,
                  })
                : await Order.find({
                      user: req.params.userId,
                      type: req.params.type,
                  }).sort({ date: -1 });
        //console.log(req.params.type);
        //const orders= await Order.find({user:req.params.userId}).sort({date:-1});
        return res.status(200).json({
            msg: "Success",
            orders,
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message,
            err,
        });
    }
};

exports.getIdOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({
            user: req.params.userId,
            stock: req.params.productId,
        }).sort({ date: -1 });
        //console.log(req.params.productId);
        //const orders= await Order.find({user:req.params.userId}).sort({date:-1});
        return res.status(200).json({
            msg: "Success",
            orders,
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message,
            err,
        });
    }
};

exports.createOrder = async (req, res, next) => {
    try {
        const order = await Order.create(req.body);
        return res.status(200).json({
            msg: "Success",
            order,
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
