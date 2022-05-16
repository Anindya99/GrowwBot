const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultQuesSchema = new Schema({
    routeName:{
      type: String,
      required: true,
    },
    kyc:{
      type: Boolean,
      description: 'default questions will based on KYC status. Each page will have two sets of questions(KYC=true and KYC=false.)',
      default: false
    },
    qlist:[{
        type: mongoose.Schema.Types.ObjectId,
    }]
  });
  
  const defQues = mongoose.model('defQues', defaultQuesSchema);
  
  module.exports= defQues;