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
  register_date:{
     type:Date,
     default:Date.now, 
  }
});

const User = mongoose.model('user', UserSchema);

module.exports= User;