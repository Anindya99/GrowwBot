const mongoose = require("mongoose");
const Stock = require("./../models/product/stockModel");
const MutualFund = require("./../models/product/mutualFund");

exports.getAllStocks = async (req, res, next) => {
    try {
        const stocks = await Stock.find();
        res.status(200).json({
            message: "success",
            length: stocks.length,
            stocks,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error...",
            error: err,
        });
    }
};

exports.createStocks = async (req, res, next) => {
    const stock = await Stock.create(req.body);
    res.status(201).json({
        message: "Created a stock..",
        stock,
    });
};

exports.getStockById = async (req, res, next) => {
    try {
        const stockId = req.params.id;
        const stock = await Stock.findById(stockId);
        res.status(200).json(stock);
    } catch (err) {
        res.status(404).json({
            message: "error",
        });
    }
};

exports.updateStock = async (req, res, next) => {
    const stocks = await Stock.find();
    res.status(200).json({
        message: "success",
        length: stocks.length,
        stocks,
    });
};

exports.deleteStock = async (req, res, next) => {
    const stocks = await Stock.find();
    res.status(200).json({
        message: "success",
        length: stocks.length,
        stocks,
    });
};

// Mutual funds controllers

exports.getAllMutualFunds = async (req, res, next) => {
    try {
        const mfs = await MutualFund.find();
        res.status(200).json({
            message: "success",
            length: mfs.length,
            mfs,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error...",
            error: err,
        });
    }
};

exports.createMutualFund = async (req, res, next) => {
    try {
        const mf = await MutualFund.create(req.body);
        res.status(201).json({
            message: "Created a stock..",
            mf,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error...",
            error,
        });
    }
};

exports.getMutualFundById = async (req, res, next) => {
    try {
        const mfId = req.params.id;
        const mf = await MutualFund.findById(mfId);
        res.status(200).json({
            message: "Success..",
            mf,
        });
    } catch (err) {
        res.status(404).json({
            message: "error",
        });
    }
};
