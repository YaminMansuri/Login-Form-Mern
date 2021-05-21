const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../model/UserModel");
const { validateRegistration, validateLogin } = require("../util/schema");

exports.postRegister = async (req, res) => {
  const { name, email, password } = req.body;

  const { error } = validateRegistration(req.body);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const findUser = await UserModel.findOne({ email: email });
  console.log(findUser);

  if (findUser) {
    return res.status(400).json("Email already exists");
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new UserModel({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const registeredUser = await user.save();
    res.json(registeredUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json("Email does not exists");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json("Invalid Password");
  }

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res.header("auth-token", token).send(token);
};
