const mongoose = require("mongoose");
// const validator = require("validator");

const surveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please, enter survey name."],
      trim: true,
      maxlength: [30, "Name must not consists of more than 30 characters."],
      minlength: [1, "Name must not consists of less than 1 characters."]
    },
    description: {
      type: String,
      required: [true, "Survey must have a description."],
      trim: true,
      maxlength: [
        300,
        "Description must not consists of more than 300 characters."
      ],
      minlength: [1, "Description must not consists of less than 1 characters."]
    },
    body: {
      type: String,
      required: [
        true,
        "Survey must have a body, which will be presented to a participants."
      ],
      trim: true,
      maxlength: [200, "Body must not consists of more than 200 characters."],
      minlength: [1, "Body must not consists of less than 1 characters."]
    },
    participants: {
      type: [String],
      required: [
        true,
        "Survey must have a participants array, that emails will be sent to."
      ]
    },
    participantsEnrolled: {
      type: Number,
      default: 0
    },
    positiveFeed: {
      type: Number,
      default: 0
    },
    negativeFeed: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Survey must belong to a User."]
    }
  },
  {
    versionKey: false
  }
);

surveySchema.pre(/^find/, function(next) {
  this.populate({
    path: "user",
    select: "-__v"
  });
  next();
});

const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;
