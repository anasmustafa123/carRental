import mysql from "mysql2";
//console.log(process.env);
const connectDb = mysql
  .createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "carRental",
  })
  .promise();
/* let [res]= await connectDb.query("SELECT * FROM cars");
console.log(res); */

export default connectDb;
