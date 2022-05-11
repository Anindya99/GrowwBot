const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "Stock must have a name"],
        minlength: [5, "Stock name length must be greater than 5"],
        trim: true,
    },
    stockType: {
        type: String,
        required: [true, "Stock type must be mentioned.."],
        minlength: [3, "Stock type length error.."],
    },
    marketCap: Number,
    ROE: Number,
    priceToIncome: Number,
    earningPerShare: Number,
    priceToBook: Number,
    dividendYield: Number,
    industryPriceToIncome: Number,
    bookValue: Number,
    DebtToEquity: Number,
    faceValue: Number,
    about: {
        type: String,
        required: [true, "About details is required.."],
    },
    parentalOrganisation: {
        type: String,
        required: true,
    },
    managingDirector: {
        type: String,
        required: true,
    },
    founded: {
        type: Date,
        required: true,
    },
    nseSymbol: string,
    images: [string],
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
