const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please, enter your name."],
      trim: true,
      maxlength: [40, "Name must not consists of more than 40 characters."],
      minlength: [2, "Name must consist of at least 2 characters."]
    },
    email: {
      type: String,
      required: [true, "Please, enter your email."],
      trim: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Email must match validation"]
    },
    googleId: {
      type: String,
      required: [true, "User must have google ID."],
      unique: true
    },
    photo: {
      type: String,
      default: "https://bit.ly/2POux5d",
      trim: true
    },
    role: {
      type: String,
      enum: ["user", "observer", "admin"],
      default: "user"
    },
    credits: {
      type: Number,
      default: 0
    },
    /*
  password: {
    type: String,
    required: [true, "Please, enter your password."],
    minlength: [8, "Password must have at least 8 characters."],
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: "Confirmation password must match original."
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpired: Date,
  */
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    },
    emailConfirmed: {
      type: Boolean,
      default: false,
      select: false
    }
  },
  {
    versionKey: false
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
