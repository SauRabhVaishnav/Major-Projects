const express = require("express");
const router = express.Router();
exports.router = router;
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");
const user = require("../models/user.js");

//Logout
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

// Login
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureflash: true }), userController.login);

router.get("/logout", userController.logout);


module.exports = router;
