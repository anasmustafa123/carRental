import express from "express";
const router = express.Router();
import {
  getAvalibleCars,
  getAllCarsStatusOnDay,
  addNewCar,
  removeCar, 
  totalNumOfCars,
  getAll
} from "../controller/carController.js";

router.post("/getAvalible", getAvalibleCars);
router.post("/allToday", getAllCarsStatusOnDay);
router.post("/create", addNewCar);
router.post("/delete", removeCar);
router.post("/count", totalNumOfCars);
router.post("/all", getAll);

export default router;
