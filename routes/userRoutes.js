const express = require("express");
const router = express.Router();

// user controller
const {
  getAllUsers,
  createNewUser,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

const {
  protect,
  signup,
  restrictTo,
  login,
  logout,
  isLoggedIn
} = require("./../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// PROTECTED
router.use(protect);
router.get("/isLoggedIn", isLoggedIn);
// router.get("/me", getMe, getSingleUser);

// RESTRICTED
router.use(restrictTo("admin"));

router
  .route("/")
  .get(getAllUsers)
  .post(createNewUser);

router
  .route("/:id")
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
