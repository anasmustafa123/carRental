import connectDb from "../config/db.js";

// @desc create new customer
const createCustomer = async (req, res) => {
  const customer = req.body;
  console.log({ customer });
  if (!customer.name || !customer.address || !customer.passportInfo) {
    res.status(401).json({ message: "empty parameter" });
  }
  const result = await connectDb.query(
    "INSERT INTO customer (name, passportInfo, address) VALUES (?, ?, ?)",
    [customer["name"], customer["passportInfo"], customer["address"]]
  );
  console.log({ result });
  res.status(201).json({ customers: result || [] });
};

const removeCustomer = async (req, res) => {
  let { customerid } = req.body;
  let [result] = await connectDb.query(
    `DELETE FROM customer WHERE customerid = ? ;`,
    [customerid]
  );
  res.status(201).json({ customers: result });
};

  
const totalNumOfCustomers = async (req, res) => {
  let [result] = await connectDb.query(`SELECT COUNT(customerId) AS customers_num
  FROM customer`);
  res.status(201).json(result[0]);
}

export { createCustomer, removeCustomer,totalNumOfCustomers };
