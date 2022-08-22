const express = require("express");

// Required for separate controller for user
const mongoose = require("mongoose");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.info = async (req, res) => {
  const token = req.headers["x-access-token"];

  try {
    const email = jwt.verify(token, "secret123").email;
    const user = await User.findOne({ email: email });
    return res.json({
      status: "ok",
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
};
