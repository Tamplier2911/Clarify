const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require("./handlerFactory");

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
