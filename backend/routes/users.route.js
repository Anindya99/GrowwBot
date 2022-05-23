const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

const userController = require("../controller/users.controller");

/**
 * @route   GET api/users/:id
 * @desc    Get user info
 * @access  Private
 */
 router.get(
    "/:id",
    auth,
    userController.getUser
  );

module.exports = router;  