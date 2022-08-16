const User = require("../models/Users");
const ErrorResponse = require("../utils/ErrorResponse");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    res.status(200).json({
      success: true,
      token: "asdadad",
    });
  } catch (err) {
    next(err);
  }
};

exports.forgotpassword = (req, res, next) => {
  res.send("forgotPassword Route");
};

exports.resetpassword = (req, res, next) => {
  res.send("resetPassword Route");
};
