import asyncHandler from "express-async-handler";
//import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { getUser, matchPassword, createUser } from "../models/userModel.js";
import connectDb from "../config/db.js";
// @desc  Authorize user/set token
// @route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser({ email });
  //console.log(user)
  if (user && (await matchPassword(user["password"], password))) {
    console.log("password matched")
    generateToken(res, user["email"], user.type);
    console.log(req.cookies);
    res.status(201).json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error(`invalid email or password`);
  }
});

// @desc  Register user new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, passportInfo, address, type } = req.body;
  console.log({ name, email, password, passportInfo, address });

  const userExist = await getUser({ email });
  if (userExist) {
    res.status(400);
    throw new Error(`User already exists with that email`);
  }
  await createUser({
    name,
    email,
    password,
    passportInfo,
    address,
    type,
  });
  let user = await getUser({ email });
  if (user) {
    generateToken(res, user.email, user.type);
    res.status(201).json({
      name: user.name,
      email: user.email,
      type: user.type,
    });
  } else {
    res.status(400);
    throw new Error(`invalid user data `);
  }
});

// @desc  Logout user
// @route POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  console.log('logging out')
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User Logout" });
});

// @desc  Get user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

// @desc  Updata user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  //const user = await User.getUserById(req.user._id);
  /*  if (user) {
    user.userName = req.user.userName;
    user.role = req.user.role;
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
  } else {
    res.status(402);
    throw new Error("wrong credentials: Update User");
  }
  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser.name,
    name: updatedUser.name,
    email: updatedUser.email,
  }); */
});

const totalNumOfUsers = async (req, res) => {
  let [result] = await connectDb.query(`SELECT COUNT(email) AS users_num
  FROM users`);
  console.log({ result });
  res.status(201).json(result[0]);
};
export { authUser, registerUser, logoutUser, getUserProfile, totalNumOfUsers };
