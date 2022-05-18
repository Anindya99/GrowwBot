
const defaultQues = require("../models/questions/default.model");
const allQues = require("../models/questions/allques.model");

exports.getDefaultQuestions = async (req, res, next) => {
    try {
        //{routeName: req.body.routeName, kyc: req.body.kyc}
        const ques = await defaultQues.find();
        if (!ques) throw Error('No question found');
      
        return res.status(200).json(ques);
       }catch (e) {
        return res.status(400).json({ msg: e.message }); 
       }
};

exports.postDefaultQuestions = async (req, res, next) => {
    const newQues = new defaultQues({
        routeName: req.body.routeName,
        kyc: req.body.kyc,
        qlist: req.body.qlist,
      });

    try{
        const ques = await newQues.save();
        return res.status(200).json(ques);
    }catch (e) {
        return res.status(400).json({ msg: e.message });
    } 

};

exports.editDefaultQuestions = async (req, res, next) => {

    const newQues = new defaultQues({
        routeName: req.body.routeName,
        kyc: req.body.kyc,
        qlist: req.body.qlist,
      });

    try {
        await defaultQues.findOneAndUpdate(
            {_id:req.params.id},
            {routeName:newQues.routeName,kyc:newQues.kyc,qlist:newQues.qlist});
            return res.status(200).json(newQues.qlist);
        }catch (e) {
            return res.status(400).json({ msg: e.message }); 
       }
};

exports.getAll = async (req, res, next) => {
    try {
        const ques = await allQues.find();
        if (!ques) throw Error('No question found');
      
        return res.status(200).json(ques);
       }catch (e) {
        return res.status(400).json({ msg: e.message }); 
       }
};

exports.getAllbyId = async (req, res, next) => {
    try {
        const ques = await allQues.findById(req.params.id);
        if (!ques) throw Error('No question found');
      
        return res.status(200).json(ques);
       }catch (e) {
        return res.status(400).json({ msg: e.message }); 
       }
};

exports.postAll = async (req, res, next) => {
    const newQues = new allQues({
        question: req.body.question,
        answer: req.body.answer,
        children: req.body.children,
      });

    try{
        const ques = await newQues.save();
        return res.status(200).json(ques);
    }catch (e) {
        return res.status(400).json({ msg: e.message });
    } 
};

exports.editAllbyId = async (req, res, next) => {
    const newQues = new allQues({
        question: req.body.question,
        answer: req.body.answer,
        children: req.body.children,
      });

    try {
        await allQues.findOneAndUpdate(
            {_id:req.params.id},
            {question:newQues.question,answer:newQues.answer,children:newQues.children});
            return res.status(200).json(newQues);
        }catch (e) {
            return res.status(400).json({ msg: e.message }); 
       }
};


exports.deleteAllbyId = async (req, res, next) => {
    try {
        const ques = await allQues.findById(req.params.id);
        if (!ques) throw Error('No item found');
        const removed = await ques.remove();
        if (!removed)
          throw Error('Something went wrong while trying to delete the item');
      
        return res.status(200).json({ success: true });
       }catch (e) {
        return res.status(400).json({ msg: e.message }); 
       }
};

