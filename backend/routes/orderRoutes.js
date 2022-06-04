const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();
const auth = require('../middleware/auth')

router
  .route("/api/v1/orders/:userId")
  .get(orderController.getAllOrders)
router
  .route("/api/v1/orders")
  .post(auth,orderController.createOrder);

router.route("/api/v1/orders/:orderId").get(orderController.getOrderById);

module.exports = router;
