const User = require("../models/userModel");
const Survey = require("../models/surveyModel");
const catchAsync = require("../utils/catchAsync");

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require("./handlerFactory");

// get all surveys created by current requesting users
exports.getAllUserSurveys = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const surveys = await Survey.find({ user: _id });

  res.status(200).json({
    status: "success",
    message: surveys
  });
});

// create one survey
// exports.createOneSurvey = createOne(Survey);
exports.createOneSurvey = catchAsync(async (req, res, next) => {
  const { _id, credits } = req.user;

  // check if user have enough money to purchase survey
  if (req.user.credits < 100)
    return res.status(403).json({
      status: 403,
      error: "Forbidden",
      message:
        "You have not enough credits to purchase a survey, please add more credits."
    });

  const surveyBody = {
    name: req.body.name,
    description: req.body.description,
    body: req.body.body,
    // participants: req.body.participants || {},
    participants: req.body.participants
      ? req.body.participants.split(",").map(email => ({ email: email.trim() }))
      : {},
    user: _id
  };

  console.log(surveyBody);

  // create survey
  const survey = await Survey.create(surveyBody);

  if (!survey) {
    return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: "Survey was not created, please try again."
    });
  }

  // charge user once survey is created
  await User.findByIdAndUpdate(
    _id,
    { credits: credits - 100 },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(201).json({
    status: "success",
    data: {
      data: survey
    }
  });
});

// get all surveys available, strict to admin
exports.getAllSurveys = getAll(Survey);

/*

// get all users
exports.getAllUsers = getAll(User);

// get single user by id
exports.getSingleUser = getOne(User);

// create user
exports.createNewUser = createOne(User);

// delete user using id
exports.deleteUser = deleteOne(User);

// update user using id - do NOT update pw with this.
exports.updateUser = updateOne(User);

*/
