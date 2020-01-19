const express = require("express");

const {
  getAllSurveys,
  getAllUserSurveys,
  createOneSurvey
} = require("../controllers/surveyController");

const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

router.route("/").get((req, res, next) => next());

// PROTECTED
router.use(protect);

router
  .route("/")
  .get(getAllUserSurveys)
  .post(createOneSurvey);

// RESTRICTED
router.use(restrictTo("admin"));
router.route("/").get(getAllSurveys);

// router
//   .route('/:id')
//   .get(getOneSurvey)
//   .patch(updateOneSurvey)
//   .delete(deleteOneSurvey);

module.exports = router;
