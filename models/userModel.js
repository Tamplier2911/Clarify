const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
// const crypto = require("crypto");

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
    photo: {
      type: String,
      default: "https://bit.ly/35Ts51W",
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
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  },
  {
    versionKey: false
  }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 2000;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
