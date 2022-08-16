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

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);
