const { findUserWithPropertyService, createUserService } = require("./user");
const bcrypt = require("bcrypt");
const error = require("../error/error");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

const registerService = async ({ name, email, password, avater }) => {
  const user = await findUserWithPropertyService("email", email);
  if (user) {
    throw error("Already have an account", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //cloudinary set up
  let avaterClous = await cloudinary.v2.uploader.upload(avater);
  //   cloudinary.image({ width: 70, height: 53, crop: "scale" });

  avater = {
    publicID: avaterClous.public_id,
    url: avaterClous.secure_url,
  };

  const newUser = await createUserService({
    name,
    email,
    password: hash,
    avater,
  });
  return newUser;
};

const loginService = async ({ email, password }) => {
  const user = await findUserWithPropertyService("email", email);

  if (!user) {
    throw error("Invalid Credentials", 404);
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw error("Invalid Credentials", 404);
  }

  const token = jwt.sign(user._doc, "dev_commerce", { expiresIn: "2h" });
  return token;
};

module.exports = {
  registerService,
  loginService,
};
