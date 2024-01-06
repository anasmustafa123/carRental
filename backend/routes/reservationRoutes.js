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
import { protect, adminOnly } from "../middleware/authMiddleware.js";


router.post("/all",adminOnly, getAllReservation);
router.post("/allOnPeriod",adminOnly, getAllReservationOnPeriod);
router.post("/allOfCustomer",adminOnly, getReseravtionOfSingleCustomer);
router.post("/create", adminOnly, addNewReservation);
router.post("/delete",adminOnly, removeReservation);
router.post("/totalRevenue",adminOnly, totalRevenue);
router.post("/totalRevenueOnPeriod",adminOnly, totalRevenueOnPeriod);
router.post("/count",adminOnly, totalNumOfReservations);


export default router;
    