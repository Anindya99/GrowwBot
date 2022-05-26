const users = require("../models/users.model");

exports.getUser = async (req, res, next) => {
    try{
        const user= await users.findById(req.params.id);
        if(!user) throw Error('No user found');

        res.status(200).json(user);
    }catch(e){
        res.status(400).json({msg:e.message});
    }
};

exports.editUser= async(req,res,next)=>{
    const newUser= new users({
        kyc: req.body.kyc,
        acc_no: req.body.acc_no,
        phone_no: req.body.phone_no,
        limit: req.body.limit
    });
    try{

        await users.findOneAndUpdate(
            {_id:req.params.id},
            {kyc: newUser.kyc,acc_no:newUser.acc_no,phone_no:newUser.phone_no,limit:newUser.limit}
        );
        return res.status(200).json(newUser);        
    }catch(e){
        res.status(400).json({msg: e.msg})
    }
}