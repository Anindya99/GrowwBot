const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultQuesSchema = new Schema({
    routeName:{
      type: String,
      required: true,
    },
    qlist:[{
        type: mongoose.Schema.Types.ObjectId,
    }]
  });
  
  const defQues = mongoose.model('defQues', defaultQuesSchema);
  
  module.exports= defQues;