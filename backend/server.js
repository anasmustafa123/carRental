import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import { getUser } from "./models/userModel.js";
import userRoutes from "./routes/userRoutes.js";
import customerRoutes from "./routes/customerRoutes.js"
import carsRoutes from "./routes/carRoutes.js"
import reservationRoutes from "./routes/reservationRoutes.js"
import officeRoutes from "./routes/officeRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from 'cors';//adding the .env const to process.env
dotenv.config();   
 
let port = process.env.PORT || 5200; 
const app = express();

//to parse row json and access the body of req
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors()); 

app.get("/", (req, res) => {
  console.log("anas");
  res.send("server is ready");  
}); 

app.use("/api/users", userRoutes); 
app.use("/api/customers", customerRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/offices", officeRoutes);

app.use(notFound);
app.use(errorHandler);
  
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});  
 