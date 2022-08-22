const express = require("express");

// Required for separate controller for course
const mongoose = require("mongoose");
const Course = require("../models/course.model");
const User = require("../models/user.model");

exports.createCourse = async (req, res) => {
  try {
    course = new Course({
      name: req.body.name,
      description: req.body.description,
      teachersID: req.body.id,
    });
    await course.save();
    return res.json({ status: "ok", course });
  } catch (error) {
    console.log(error);
    return res.json({ status: "error" });
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find().populate("teachersID");
    if (!courses)
      return res.json({ status: "error", error: "NO courses found" });
    return res.json({ status: "ok", courses });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Internal Server error" });
  }
};
