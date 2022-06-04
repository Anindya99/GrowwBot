const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();

router
  .route("/api/v1/orders")
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router.route("/api/v1/orders/:orderId").get(orderController.getOrderById);

module.exports = router;
