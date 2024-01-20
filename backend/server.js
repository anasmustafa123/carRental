import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import { getUser } from "./models/userModel.js";
import userRoutes from "./routes/userRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import carsRoutes from "./routes/carRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import officeRoutes from "./routes/officeRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import path from "path";
//adding the .env const to process.env
dotenv.config();

console.log(process.env);
console.log(process.env.MYSQL_PASSWORD);
let port = process.env.PORT || 5200;
const app = express();

//to parse row json and access the body of req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//
app.use(
  cors({
    origin: "https://rent-a-car-website.onrender.com",
    credentials: true,
  })
);
//app.options("/api/users/auth", cors());


app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/offices", officeRoutes);

if (process.env.NODE_ENV == "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.get("/", (req, res) => {
  console.log("anas");
  res.send("server is ready");
});
app.use(notFound);
app.use(errorHandler);


 
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
