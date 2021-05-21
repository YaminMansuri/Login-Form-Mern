const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db");
  }
);

app.use("/api/", authRoute);

app.listen(5000);
