const express = require("express");

const {
  getAllSurveys,
  getAllUserSurveys,
  createOneSurvey,
  getOneSurvey,
  updateOneSurvey,
  deleteOneSurvey,
  getVoteYes,
  getVoteNo,
  createSendgridReport
} = require("../controllers/surveyController");

const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

// SENDGRID REPORT
router.route("/report").post(createSendgridReport);

// PARTICIPANT VOTE ROUTE
router.route("/vote/yes/:id").get(getVoteYes);
router.route("/vote/no/:id").get(getVoteNo);

// PROTECTED
router.use(protect);

router
  .route("/")
  .get(getAllUserSurveys)
  .post(createOneSurvey);

// RESTRICTED
router.use(restrictTo("admin"));
router.route("/all").get(getAllSurveys);

router
  .route("/:id")
  .get(getOneSurvey)
  .patch(updateOneSurvey)
  .delete(deleteOneSurvey);

module.exports = router;
