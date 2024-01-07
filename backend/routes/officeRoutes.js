import express from "express";
const router = express.Router();
import {
  addNewOffice,
  totalNumOfOffices,
  getOffices,
  getOfficeId
} from "../controller/officeController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

router.post("/create", adminOnly, addNewOffice);
router.post("/count", adminOnly, totalNumOfOffices);
router.post("/allLocations", protect, getOffices);
router.post("/getId", protect, getOfficeId);

export default router;
