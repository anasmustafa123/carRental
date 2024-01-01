import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
} from "../controller/userController.js";

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile)

//.put("/profile", updateUserProfile);

export default router;
