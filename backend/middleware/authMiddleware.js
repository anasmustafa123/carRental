import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { getUser } from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  console.log("the cookies: ");
  console.log(req.cookies);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = await getUser(decoded.userEmail);
    } catch {
      res.status(401);
      throw new Error("not authorized, token not valid");
    }
  } else {
    res.status(401);
    throw new Error("not authorized, token not found");
  }
  next();
});
const adminOnly = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  console.log("the cookies: ");
  console.log(req.cookies);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      if (decoded.type != "admin") {
        throw new Error("");
      }
      req.user = await getUser(decoded.userEmail);
      console.log(req.user);
    } catch {
      res.status(401);
      throw new Error("not authorized, token not valid");
    }
  } else {
    res.status(401);
    throw new Error("not authorized, not an admin");
  }
  next();
});
export { protect, adminOnly };
