require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();
const connectDB = require("./config/db");

const cors = require("cors");

connectDB();
app.use(cors());
app.use(express.json());

// Connecting Routes
app.use("/api", require("./routes/auth.routes"));
app.use("/api", require("./routes/users.routes"));
app.use("/api", require("./routes/course.routes"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);
