const express = require("express");
const router = express.Router();

const questionController = require("../controller/questions.controller");

/**
 * @route   GET api/questions/default
 * @desc    Get default questions by route name and kyc status
 * @access  Public
 */
 router.get(
    "/default",
    questionController.getDefaultQuestions
  );

  /**
 * @route   POST api/questions/default
 * @desc    Post all default questions
 * @access  Public
 */
 router.post(
    "/default",
    questionController.postDefaultQuestions
  );

  /**
 * @route   PUT api/questions/default/:id
 * @desc    Edit default questions
 * @access  Public
 */
 router.put(
    "/default/:id",
    questionController.editDefaultQuestions
  );

/**
 * @route   GET api/questions/all
 * @desc    Get all question
 * @access  Public
 */
 router.get(
  "/all",
  questionController.getAll
);

  /**
 * @route   GET api/questions/all/:id
 * @desc    Get a particular question
 * @access  Public
 */
 router.get(
    "/all/:id",
    questionController.getAllbyId
  );

  /**
 * @route   POST api/questions/all
 * @desc    POST question
 * @access  Public
 */
 router.post(
    "/all",
    questionController.postAll
  );

  /**
 * @route   PUT api/questions/all/:id
 * @desc    Edit particular question
 * @access  Public
 */
 router.put(
    "/all/:id",
    questionController.editAllbyId
  );

  /**
 * @route   DELETE api/questions/all/:id
 * @desc    Delete particular question
 * @access  Public
 */
 router.delete(
    "/all/:id",
    questionController.deleteAllbyId
  );


module.exports = router;