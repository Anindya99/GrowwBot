const mongoose = require("mongoose");
const Stock = require("./../models/product/stockModel");
const MutualFund = require("./../models/product/mutualFund");
const FixedDeposit = require("./../models/product/fixedDeposit");

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
    const newStock = new Stock({
        name: req.body.name,
        stockType: req.body.stockType,
        price: req.body.price,
        priceToIncome: req.body.priceToIncome,
        about: req.body.about,
        parentalOrganisation: req.body.parentalOrganisation,
        managingDirector: req.body.managingDirector,
        founded: req.body.founded,
        images: req.body.images
      });

    try {
        await Stock.findOneAndUpdate(
            {_id:req.params.id},
            {name:newStock.name,
            stockType:newStock.stockType,
            price:newStock.price,
            priceToIncome: newStock.priceToIncome,
            about:newStock.about,
            parentalOrganisation:newStock.parentalOrganisation,
            managingDirector:newStock.managingDirector,
            founded:newStock.founded,
            images: newStock.images,
        });
            return res.status(200).json(newStock);
        }catch (e) {
            return res.status(400).json({ msg: e.message }); 
       }
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
        res.status(200).json(mf);
    } catch (err) {
        res.status(404).json({
            message: "error",
        });
    }
};

exports.updateMutualFund = async (req, res, next) => {
    const newFund = new MutualFund({
        title: req.body.title,
        roi: req.body.roi,
        time: req.body.time,
        nav: req.body.nav,
        rating: req.body.rating,
        minSipAmount: req.body.minSipAmount,
        fundSize: req.body.fundSize,
        tags: req.body.tags,
        image: req.body.image
      });

    try {
        await MutualFund.findOneAndUpdate(
            {_id:req.params.id},
            {title:newFund.title,
            roi:newFund.roi,
            time:newFund.time,
            nav: newFund.nav,
            rating:newFund.rating,
            minSipAmount:newFund.minSipAmount,
            fundSize:newFund.fundSize,
            tags:newFund.tags,
            image: newFund.image,
        });
            return res.status(200).json(newFund);
        }catch (e) {
            return res.status(400).json({ msg: e.message }); 
       }
};


// Fixed deposits controllers

exports.getAllFixedDeposits = async (req, res, next) => {
    try {
        const FD = await FixedDeposit.find();
        res.status(200).json({
            message: "success",
            length: FD.length,
            FD,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error...",
            error: err,
        });
    }
};

exports.createFixedDeposits = async (req, res, next) => {
    try {
        const FD = await FixedDeposit.create(req.body);
        res.status(201).json({
            message: "Created a FD...",
            FD,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error...",
            error,
        });
    }
};

exports.getFixedDepositById = async (req, res, next) => {
    try {
        const fdId = req.params.id;
        const FD = await FixedDeposit.findById(fdId);
        res.status(200).json(FD);
    } catch (err) {
        res.status(404).json({
            message: "error",
        });
    }
};

exports.updateFixedDeposit = async (req, res, next) => {
    const newFd = new FixedDeposit({
        title: req.body.title,
        roi: req.body.roi,
        time: req.body.time,
        minAmt: req.body.minAmt,
        compounding: req.body.compounding,
        withdrawal: req.body.withdrawal,
        image: req.body.image
      });

    try {
        await FixedDeposit.findOneAndUpdate(
            {_id:req.params.id},
            {title:newFd.title,
            roi:newFd.roi,
            time:newFd.time,
            minAmt: newFd.minAmt,
            compounding:newFd.compounding,
            withdrawal:newFd.withdrawal,
            image: newFd.image,
        });
            return res.status(200).json(newFd);
        }catch (e) {
            return res.status(400).json({ msg: e.message }); 
       }
};