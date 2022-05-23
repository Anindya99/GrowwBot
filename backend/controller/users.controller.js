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