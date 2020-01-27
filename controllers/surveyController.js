const User = require("../models/userModel");
const Survey = require("../models/surveyModel");
const catchAsync = require("../utils/catchAsync");

const Mailer = require("../utils/Mailer");
const surveyTemplate = require("../templates/surveyEmailTemplate");

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
    /*
    participants: req.body.participants
      ? req.body.participants.split(",").map(email => ({ email: email.toLowerCase().trim() }))
      : {},
    */
    // this logic will not allow request if more than 10 participants listed | for testing purpuses
    participants: req.body.participants
      ? req.body.participants.split(",").length > 10
        ? {}
        : req.body.participants
            .split(",")
            .map(email => ({ email: email.toLowerCase().trim() }))
      : {},
    user: _id
  };

  // console.log(surveyBody);

  // create survey
  const survey = await Survey.create(surveyBody);

  if (!survey) {
    return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: "Survey was not created, please try again."
    });
  }

  // send email
  // using selfmade js templates
  urls = {
    yes: "https://clarify-s.herokuapp.com/",
    no: "https://clarify-s.herokuapp.com/"
  };
  // urls = {
  //   yes: "https://clarify-s.herokuapp.com/api/v1/surveys/:id/yes",
  //   no: "https://clarify-s.herokuapp.com/api/v1/surveys/:id/no"
  // };

  // create route for res.send('Thank for participating in a survey! You gained +100 to your karma!')

  const mailer = new Mailer(survey, surveyTemplate(survey, urls));

  // using pug templates
  // const mailer = new Mailer(survey, "survey");
  const sendgridResponse = await mailer.send();

  // console.log(sendgridResponse);

  // if we had bad request - do not charge user, delete instance of survey
  if (![200, 201, 202].includes(sendgridResponse.statusCode)) {
    await Survey.findByIdAndDelete(survey._id);

    return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message:
        "Something went wrong with email service, please try again later."
    });
  }

  // if survey created and emails were send charge user
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

// get single survey by id, strict to admin
exports.getOneSurvey = getOne(Survey);

// delete survey using id, strict to admin
exports.deleteOneSurvey = deleteOne(Survey);

// update survey using id, strict to admin
exports.updateOneSurvey = updateOne(Survey);
