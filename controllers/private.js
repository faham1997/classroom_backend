exports.getPrivateRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You got access to this route",
  });
};
