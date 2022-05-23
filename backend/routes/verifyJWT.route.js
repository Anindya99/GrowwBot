const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

/**
 * @route   GET api/verify/token
 * @desc    Get JWT in localstorage
 * @access  Private
 */
 router.get(
    "/token",
    auth,
    async (req,res)=>{
        try{
            res.status(200).json({msg:'verified'});
        }catch(e){
            res.status(400).json({msg:e.message});
        }
    }
  );

module.exports = router;  