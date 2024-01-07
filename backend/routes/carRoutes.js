import express from "express";
const router = express.Router();
import {
  getAvalibleCars,
  getAllCarsStatusOnDay,
  addNewCar,
  removeCar,
  totalNumOfCars,
  getAll,
} from "../controller/carController.js";
import { adminOnly } from "../middleware/authMiddleware.js";

router.post("/getAvalible", getAvalibleCars);
router.post("/allToday", adminOnly, getAllCarsStatusOnDay);
router.post("/create", adminOnly, addNewCar);
router.post("/delete", adminOnly, removeCar);
router.post("/count", adminOnly, totalNumOfCars);
router.post("/all", adminOnly, getAll);

export default router;
