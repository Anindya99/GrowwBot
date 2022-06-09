const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();
const auth = require("../middleware/auth");

// /api/v1/:category/:id

// Stocks Routes
router
    .route("/api/v1/stocks")
    .get(productController.getAllStocks)
    .post(productController.createStocks);
router
    .route("/api/v1/stocks/:id")
    .get(productController.getStockById)
    .put(productController.updateStock)
    .delete(productController.deleteStock);

// // Mutual Funds routes
router
    .route("/api/v1/mutual-funds")
    .get(productController.getAllMutualFunds)
    .post(productController.createMutualFund);

router
    .route("/api/v1/mutual-funds/:id")
    .get(productController.getMutualFundById)
    .put(productController.updateMutualFund);
//     .delete(productController.deleteMutualFund);

// // Fixed deposites routes
router
    .route("/api/v1/fixed-deposits")
    .get(productController.getAllFixedDeposits)
    .post(productController.createFixedDeposits);

router
    .route("/api/v1/fixed-deposists/:id")
    .get(productController.getFixedDepositById)
    .put(productController.updateFixedDeposit);
//     .delete(productController.deleteFixedDeposit);

module.exports = router;
