const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allQuesSchema = new Schema({
  routeName:{
    type: String,
    default: "stocks-user-explore"
    },
    question:{
      type: String,
    },
    answer:{
        type: String,
    },
    action:{
      type: String
    },
    children:[{
        type: mongoose.Schema.Types.ObjectId,
    }],
    freq:{
      type: Number,
      default: 0,
      description: 'number of time particular question has been clicked',
    }
  });
  
  const allQues = mongoose.model('allQues', allQuesSchema);
  
  module.exports= allQues;