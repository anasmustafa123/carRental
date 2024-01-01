import express from "express";
const router = express.Router();
import { createCustomer, removeCustomer,totalNumOfCustomers } from "../controller/customerController.js";

router.post("/create", createCustomer);
router.post("/delete", removeCustomer);
router.post("/count", totalNumOfCustomers);

export default router;
