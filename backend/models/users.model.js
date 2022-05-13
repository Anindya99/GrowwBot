const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique:true
  },
  picture:{
    type:String,
    description: "Picture of user"
  },
  password:{
    type:String,
    description: "Password for local user"
  },
  kyc:{
    type: Boolean,
    default: false,
    description: "if KYC is done or not"
  },
  limit:{
    type: Number,
    default: 1000000000,
    max: 1000000000,
    min: 0,
    description: "stores any limit of transaction set by the user"
  },
  register_date:{
     type:Date,
     default:Date.now, 
  }
});

const User = mongoose.model('user', UserSchema);

module.exports= User;