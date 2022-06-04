const mongoose = require("mongoose");
const Stock = require("./product/stockModel");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
    description: "Picture of user",
  },
  password: {
    type: String,
    description: "Password for local user",
  },
  kyc: {
    type: Boolean,
    default: false,
    description: "if KYC is done or not",
  },
  acc_no: {
    type: Number,
    default: 0,
    description: "store account number to complete kyc",
  },
  phone_no: {
    type: Number,
    default: 0,
    description: "store phone number to complete kyc",
  },
  limit: {
    type: Number,
    default: 1000000000,
    max: 1000000000,
    min: 0,
    description: "stores any limit of transaction set by the user",
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  stocksBought: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Stock",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
