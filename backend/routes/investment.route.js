const express = require("express");
const investmentController = require("../controller/investmentController");
const router = express.Router();
const auth = require('../middleware/auth')

router.get(
  "/user/:type/:userId",
  auth,
  investmentController.getAllOrders
);
router
  .route("/")
  .post(auth,investmentController.createOrder);

router.route("/:orderId").get(investmentController.getOrderById);

module.exports = router;
