const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/", authRoute);

dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(5000);
  }
);
