const mongoose = require("mongoose");

const fixedDepositSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    roi: {
        type: Number,
        description: "stores the return percentage",
    },
    time: {
        type: Number,
        description: "stores the time for which investment is made",
    },
    minAmt: {
        type: Number,
        default: 1000,
    },
    compounding: {
        type: String,
        default: "Quaterly",
    },
    withdrawal: {
        type: String,
        default: "NA",
    },
    image: String,
});

const FixedDeposit = mongoose.model("FixedDeposit", fixedDepositSchema);
module.exports = FixedDeposit;
