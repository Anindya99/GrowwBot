const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allQuesSchema = new Schema({
    question:{
      type: String,
    },
    answer:{
        type: String,
    },
    children:[{
        type: mongoose.Schema.Types.ObjectId,
    }]
  });
  
  const allQues = mongoose.model('allQues', allQuesSchema);
  
  module.exports= allQues;