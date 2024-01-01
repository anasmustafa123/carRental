import express from "express";
const router = express.Router();
import {
  getCars,
  getAllCarsStatusOnDay,
  addNewCar,
  removeCar,
  totalNumOfCars
} from "../controller/carController.js";

router.post("/all", getCars);
router.post("/allToday", getAllCarsStatusOnDay);
router.post("/create", addNewCar);
router.post("/delete", removeCar);
router.post("/count", totalNumOfCars);

export default router;
