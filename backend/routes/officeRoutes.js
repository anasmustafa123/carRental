import express from "express";
const router = express.Router();
import { addNewOffice, totalNumOfOffices, getOffices } from "../controller/officeController.js";

router.post("/create", addNewOffice);
router.post("/count", totalNumOfOffices);
router.post("/allLocations", getOffices);


  
export default router;
 