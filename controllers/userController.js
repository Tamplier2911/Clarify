const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require("./handlerFactory");

exports.getAllUsers = getAll(User);

exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

exports.getUserObject = catchAsync(async (req, res, next) => {
  let query = User.findById(req.params.id);
  const document = await query;
  console.log(document);
  if (!document) {
    return res.status(404).json({
      status: 404,
      error: "Not Found",
      message: "No document found with that ID."
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      data: document
    }
  });
});

// get single user by id
exports.getSingleUser = getOne(User);

// create user
exports.createNewUser = createOne(User);

// delete user using id
exports.deleteUser = deleteOne(User);

// update user using id - do NOT update pw with this.
exports.updateUser = updateOne(User);
