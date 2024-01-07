import express from "express";
const router = express.Router();
import {
  createCustomer,
  removeCustomer,
  totalNumOfCustomers,
  getAllCustomers,
} from "../controller/customerController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

router.post("/all", adminOnly, getAllCustomers);
router.post("/create", protect, createCustomer);
router.post("/delete", protect, removeCustomer);
router.post("/count", adminOnly, totalNumOfCustomers);

export default router;
