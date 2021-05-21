const Joi = require("joi");

exports.validateRegistration = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(11).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

exports.validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(11).required().email(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};
