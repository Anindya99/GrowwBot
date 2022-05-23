const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");


const auth = async (req, res, next) => {
    const token = await req.headers["authtoken"].split(" ")[1];
    //console.log(req.headers)
    // Check for token
    if (!token)
        return res.status(401).json({ msg: "No token, authorization denied" });

    try {
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
