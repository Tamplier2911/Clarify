const User = require("../models/userModel");
const Survey = require("../models/surveyModel");
const catchAsync = require("../utils/catchAsync");

const Mailer = require("../utils/Mailer");
const surveyTemplate = require("../templates/surveyEmailTemplate");

const voteTemplate = require("../templates/surveyThankyouTemplate");

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require("./handlerFactory");

// participants voting routes
exports.getVoteYes = (req, res, next) => {
  res.send(voteTemplate());
};

exports.getVoteNo = (req, res, next) => {
  res.send(voteTemplate());
};

// process sendgrid post request containing reports
exports.createSendgridReport = catchAsync(async (req, res, next) => {
  const processClickEevents = async ({ email, url }) => {
    const urlArr = url.split("/");
    const surveyId = urlArr[urlArr.length - 1];
    const vote = urlArr[urlArr.length - 2];
    const participantEmail = email;

    if (!surveyId || !vote) return;
    // console.log(surveyId, vote, participantEmail, "PARTICIPANT DATA");

    // get survey using id wired to url of webhook
    const survey = await Survey.findById(surveyId).select("+participants");
    if (!survey._id) return;

    // find index of current participant by email
    const participantIndex = survey.participants.findIndex(
      participant => participant.email === participantEmail
    );
    if (participantIndex === -1) return;

    // if participant already voted - return
    if (survey.participants[participantIndex].vote === true) return;

    // esle turn vote status to true
    survey.participants[participantIndex].vote = true;

    // increase number of participants enrolled in survey
    survey.participantsEnrolled = survey.participantsEnrolled + 1;

    // dependant on participant clicked 'yes' or 'no'
    // either increase positive or negative feed
    if (vote === "yes") {
      survey.positiveFeed = survey.positiveFeed + 1;
    } else if (vote === "no") {
      survey.negativeFeed = survey.negativeFeed + 1;
    }

    // save survey
    await survey.save();

    // console.log(survey);
  };

  // filter out click events only
  const clickEvents = req.body.filter(obj => obj.event === "click");

  // use hashmap to remove duplicates if user clicked twice or more
  // let map = clickEvents.reduce((acc, el) => ((acc[el.email] = el), acc), {});
  let map = clickEvents.reduce(
    (acc, obj) => ((acc[`${obj.email}-${obj.url.split("/")[8]}`] = obj), acc),
    {}
  );
  console.log(map);
  // loop over unique click events using processClickEvents function on each event
  Object.values(map).map(processClickEevents);

  // generic response
  res.status(201).send("Success!");
});

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

  if (process.env.NODE_ENV === "development") {
    // dev mode urls
    // npx ngrok http 5000
    urls = {
      yes: "https://50669621.ngrok.io/api/v1/surveys/vote/yes/",
      no: "https://50669621.ngrok.io/api/v1/surveys/vote/no/"
    };
  }

  if (process.env.NODE_ENV === "production") {
    // prod mode urls
    urls = {
      yes: "https://clarify-s.herokuapp.com/api/v1/surveys/vote/yes/",
      no: "https://clarify-s.herokuapp.com/api/v1/surveys/vote/no/"
    };
  }

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
