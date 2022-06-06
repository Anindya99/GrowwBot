const mongoose = require("mongoose");

const mutualFundSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required for mutual funds"],
        unique: [true, "Mutual funds name cannot be same"],
    },
    roi:{
        type: Number,
        description: "stores the return percentage"
    },
    time:{
        type: Number,
        description: "stores the time for which investment is made"
    },
    nav: {
        type: Number,
        required: true,
        default: 195.43,
    },
    rating: {
        type: Number,
        default: 3.2,
    },
    minSipAmount: {
        type: Number,
        default: 100,
    },
    fundSize: {
        type: Number,
        default: 23243.43,
    },
    tags: [String],
    image: String,
});

const MutualFund = mongoose.model("MutualFund", mutualFundSchema);
module.exports = MutualFund;
