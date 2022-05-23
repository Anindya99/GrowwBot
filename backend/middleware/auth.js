const jwt = require("jsonwebtoken");
<<<<<<< HEAD
// const { jwtSecret } = require("../config/config");
//const config= require('config');

const jwtSecret = process.env.JWTSECRET;
=======
const { jwtSecret } = require("../config");


const auth = async (req, res, next) => {
    const token = await req.headers["authtoken"].split(" ")[1];
    //console.log(req.headers)
    // Check for token
    if (!token)
        return res.status(401).json({ msg: "No token, authorization denied" });
>>>>>>> 457f61db875775d127a168e9ee8fa9c9a3eb9226

const auth = async (req, res, next) => {
    try {
        const token =
            req.cookies.jwt || req.headers["x-auth-token"].split(" ")[1];
        // Check for token
        if (!token)
            return res
                .status(401)
                .json({ msg: "No token, authorization denied" });

        // Verify token
        const decoded = jwt.verify(token, jwtSecret);
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: "Token is not valid" });
    }
};

module.exports = auth;
