const mongoose = require("mongoose");
const validator = require("validator");

const participantSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Participant must have an email."],
    trim: true,
    // unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Email must match validation"]
  },
  vote: {
    type: Boolean,
    default: false
  }
});

// const Participant = mongoose.model("Participant", participantSchema);
// module.exports = Participant;

module.exports = participantSchema;
