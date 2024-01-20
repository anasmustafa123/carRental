import express from "express";
const router = express.Router();
import {
  authUser,
  authAdmin,
  registerUser,
  logoutUser,
  getUserProfile,
  totalNumOfUsers,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/authAdmin", authAdmin);
router.post("/", registerUser);
router.post("/logout", protect, logoutUser);
router.get("/profile", protect, getUserProfile);
router.post("/count", protect, totalNumOfUsers);

//.put("/profile", updateUserProfile);

export default router;
