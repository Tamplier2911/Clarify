const AppError = require("../utils/appError");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
// const crypto = require("crypto");

const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const signToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // secure: true
    httpOnly: true
  };

  // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  if (req.secure || req.headers["x-forwarded-proto"] === "https")
    cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token: token,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    }
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });
  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password.", 400));
  }

  const user = await User.findOne({ email: email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password.", 401));
  }

  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    status: "success",
    msg: "You have logged out securely."
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You have to login, in order to view this route.", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError("User with that ID is no longer exists.", 401));
  }

  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password. Please log in again.", 401)
    );
  }

  // Grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have premission to perform this action.", 403)
      );
    }
    next();
  };
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return res.status(200).json({
          status: "success",
          data: {
            data: ""
          }
        });
      }

      if (currentUser.changePasswordAfter(decoded.iat)) {
        return res.status(200).json({
          status: "success",
          data: {
            data: ""
          }
        });
      }

      // if we get here - We have a logged in user
      return res.status(200).json({
        status: "success",
        data: {
          data: currentUser
        }
      });
    } catch (err) {
      return next();
    }
  }
  return res.status(200).json({
    status: "success",
    data: {
      data: ""
    }
  });
};
