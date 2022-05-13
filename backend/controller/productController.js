const mongoose = require("mongoose");
const Stock = require("./../models/product/stockModel");

exports.getAllStocks = async (req, res, next) => {
    const stocks = await Stock.find();
    res.status(200).json({
        message: "success",
        length: stocks.length,
        stocks,
    });
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
