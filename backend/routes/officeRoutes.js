import express from "express";
const router = express.Router();
import { addNewOffice } from "../controller/officeController.js";

router.post("/create", addNewOffice);

  
export default router;
