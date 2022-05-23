const mongoose = require("mongoose");

const mutualFundSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required for mf"],
        unique: [true, "Mfs name cannot be same"],
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
