const { OAuth2Client } = require("google-auth-library");
const express = require("express");
const router = express.Router();
const { googleClientId, jwtSecret } = require("../config");
const jwt = require("jsonwebtoken");
const client = new OAuth2Client(googleClientId);

//bringing users.model.js from models folder
const User = require("../models/users.model");

/**
 * @route   POST /api/users/Oauth/google
 * @desc    Login user
 * @access  Public
 */
router.post("/google", async (req, res) => {
    try {
        const token = req.body.sendToken;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: googleClientId,
        });

        const { name, email, picture } = ticket.getPayload();
        //console.log(picture)
        User.findOne({ email }).then((user) => {
            if (!user) {
                const newUser = new User({
                    name,
                    email,
                    picture,
                });
                try {
                    newUser.save().then((user) => {
                        const token = jwt.sign(
                            {
                                _id: user._id,
                                name: user.name,
                                email: user.email,
                                picture: user.picture,
                            },
                            jwtSecret,
                            { expiresIn: 3600 }
                        );
                        if (!token) throw Error("Could not sign the token");

                        res.status(200).json({
                            token,
                            user: {
                                _id: user._id,
                                name: user.name,
                                email: user.email,
                                picture: user.picture,
                            },
                        });
                    });
                } catch (e) {
                    res.status(400).json({ msg: e.message });
                }
            } else {
                const token = jwt.sign(
                    {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        picture: user.picture,
                    },
                    jwtSecret,
                    { expiresIn: 3600 }
                );
                if (!token) throw Error("Couldnt sign the token");
                /* res.cookie("jwt", token, {
                    httpOnly: true,
                    domain: null,
                    expiresIn: 3600,
                }); */
                res.status(200).json({
                    token,
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        picture: user.picture,
                    },
                });
            }
        });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

module.exports = router;
