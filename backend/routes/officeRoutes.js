import express from "express";
const router = express.Router();
import {
  addNewOffice,
  totalNumOfOffices,
  getOffices,
} from "../controller/officeController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

router.post("/create", adminOnly, addNewOffice);
router.post("/count", adminOnly, totalNumOfOffices);
router.post("/allLocations", protect, getOffices);

export default router;
