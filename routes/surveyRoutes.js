const express = require("express");

const {} = require("../controllers/surveyController");
const { protect } = require("../controllers/authController");
//   const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route("/").get((req, res, next) => next());

// PROTECTED
router.use(protect);

// RESTRICTED
// router.use(restrictTo('admin', 'lead-guide'));

// router
//   .route('/')
//   .get(getAllSurveys)
//   .post(createOneSurvey);

// router
//   .route('/:id')
//   .get(getOneSurvey)
//   .patch(updateOneSurvey)
//   .delete(deleteOneSurvey);

module.exports = router;
