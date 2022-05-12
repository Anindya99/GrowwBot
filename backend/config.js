const dotenv = require("dotenv");
dotenv.config();
module.exports ={
    db_link:process.env.DB_LINK,
    jwtSecret:process.env.JWTSECRET,
    GOOGLE_CLIENTID:process.env.GOOGLE_CLIENTID,
    googleSecret:process.env.GOOGLE_SECRET
};