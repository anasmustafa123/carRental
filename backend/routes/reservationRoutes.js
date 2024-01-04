import express from "express";
const router = express.Router();
import {
  getAllReservation,
  getAllReservationOnPeriod,
  getReseravtionOfSingleCustomer,
  addNewReservation,  
  removeReservation,
  totalRevenue,
  totalNumOfReservations,
  totalRevenueOnPeriod
} from "../controller/reservationController.js";

router.post("/all", getAllReservation);
router.post("/allOnPeriod", getAllReservationOnPeriod);
router.post("/allOfCustomer", getReseravtionOfSingleCustomer);
router.post("/create", addNewReservation);
router.post("/delete", removeReservation);
router.post("/totalRevenue", totalRevenue);
router.post("/totalRevenueOnPeriod", totalRevenueOnPeriod);
router.post("/count", totalNumOfReservations);


export default router;
    