import { query } from "express";
import connectDb from "../config/db.js";
import { createCustomer } from "../controller/customerController.js";

// @desc returning user with email if found
const getUser = async ({ email }) => {
  let [result] = await connectDb.query("SELECT * FROM users WHERE  email = ?", [
    email,
  ]);
  console.log({ result });
  if (result.length == 0) return null;
  return result[0];
};


// @desc matching password
const matchPassword = async (userPassword, enteredPassword) => {
  //console.log({userPassword, enteredPassword})
  return userPassword === enteredPassword;
};

// @desc createUser and customer  with desc
const createUser = async (user) => {
  await connectDb.query(
    "INSERT INTO users (name, password, email, type) VALUES (?, ?, ?, ?)",
    [user["name"], user["password"], user["email"], user["type"]]
  );
};

export { getUser, matchPassword, createUser };
