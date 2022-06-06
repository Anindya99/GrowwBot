const express = require("express");
const investmentController = require("../controller/investmentController");
const router = express.Router();
const auth = require('../middleware/auth')

router.get(
  "/productbyType/:type/:userId",
  auth,
  investmentController.getAllOrders
);
router.get(
  "/productbyId/:productId/:userId",
  auth,
  investmentController.getIdOrders
);
router
  .route("/")
  .post(auth,investmentController.createOrder);

router.route("/:orderId").get(investmentController.getOrderById);

module.exports = router;
