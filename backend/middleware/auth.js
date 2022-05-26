const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../config/config");
//const config= require('config');

const jwtSecret = process.env.JWTSECRET;

const auth = async (req, res, next) => {
    try {
        const token =
            req.headers["authtoken"].split(" ")[1];
        // Check for token
        if (!token )
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
