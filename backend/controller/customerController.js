import connectDb from "../config/db.js";

//
const getSingleCustomer = async (passportInfo) => {
  const [customer] = await connectDb.query(
    `
  select * from customer where passportInfo = ?
  `,
    [passportInfo]
  );
  return customer[0];
};

// @desc create new customer
const createCustomer = async (req, res) => {
  const customer = req.body;
  console.log({ customer });
  let customerExists = await getSingleCustomer(customer.passportInfo);
  console.log({ customerExists });
  if (customerExists) { 
    res.status(401);
    throw new Error(`customer already exists`);
  } else if (!customer.name || !customer.address || !customer.passportInfo) {
    res.status(401);
    throw new Error(`empty parameter`);
  } else {
    const result = await connectDb.query(
      "INSERT INTO customer (name, passportInfo, address) VALUES (?, ?, ?)",
      [customer["name"], customer["passportInfo"], customer["address"]]
    );
    console.log({ result });
    res.status(201).json({ customers: result || [] });
  }
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
  let [result] =
    await connectDb.query(`SELECT COUNT(customerId) AS customers_num
  FROM customer`);
  res.status(201).json(result[0]);
};

const getAllCustomers = async (req, res) => {
  let [result] = await connectDb.query(`SELECT *
FROM customer`);
  res.status(201).json(result);
};



export { createCustomer, removeCustomer, totalNumOfCustomers, getAllCustomers };
