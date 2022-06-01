
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

exports.getDefaultQlist= async(req,res)=>{
    try{
        //const route= req.headers["info"].split(" ")[0];
        //const kyc= req.headers["info"].split(" ")[1];
        const route= req.params.route;
        const kyc= req.params.kyc;
        let q1= await defaultQues.find({routeName:route});
        if(!q1) throw Error('No data in the given route');
        //console.log(route.split("-").pop())
        q1= q1[0]['qlist'];
        if(kyc==='false' && route.split("-").pop()!=='none'){
            const q2= await defaultQues.find({routeName:`kyc-${route.split("-").pop()}`});
            if(!q2) throw Error(`No data in /kyc/${route.split("-").pop()}`);

            q1= q1.concat(q2[0]['qlist']);
        }
        
        //console.log(q3);
        return res.status(200).json(q1);
        
    }catch(e){
        return res.status(400).json({msg: e.message});
    }
}

exports.postDefaultQuestions = async (req, res, next) => {
    const newQues = new defaultQues({
        routeName: req.body.routeName,
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
        qlist: req.body.qlist,
      });

    try {
        await defaultQues.findOneAndUpdate(
            {_id:req.params.id},
            {routeName:newQues.routeName,qlist:newQues.qlist});
            return res.status(200).json(newQues.qlist);
        }catch (e) {
            return res.status(400).json({ msg: e.message }); 
       }
};

exports.deletedefaultbyId = async (req,res,next)=>{
    try {
        const ques = await defaultQues.findById(req.params.id);
        if (!ques) throw Error('No item found');
        const removed = await ques.remove();
        if (!removed)
          throw Error('Something went wrong while trying to delete the item');
      
        return res.status(200).json({ success: true });
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
        routeName: req.body.routeName,
        question: req.body.question,
        answer: req.body.answer,
        action: req.body.action,
        freq: req.body.freq,
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
        routeName: req.body.routeName,
        question: req.body.question,
        answer: req.body.answer,
        action: req.body.action,
        freq: req.body.freq,
        children: req.body.children,
      });

    try {
        await allQues.findOneAndUpdate(
            {_id:req.params.id},
            {routeName:newQues.routeName,question:newQues.question,answer:newQues.answer,action: newQues.action,freq:newQues.freq,children:newQues.children});
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

