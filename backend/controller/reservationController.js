import connectDb from "../config/db.js";

const getSingleReservation = async (req, res) => {
  let { reservationId } = req.body;
  let [result] = await connectDb.query(
    `select * from reservation where reservationId = ?`,
    [reservationId]
  );
  res.status(201).json({ reservations: result[0] });
};

// @desc get all reservations
// POST
const getAllReservation = async (req, res) => {
  let [result] = await connectDb.query(`SELECT *
FROM reservation join customer on customer.customerId = reservation.customerId join cars on cars.plateId = reservation.plateId`);
  res.status(201).json(result);
};

// not working
// @desc all reservation within specific period
// POST
const getAllReservationOnPeriod = async (req, res) => {
  let dates = req.body;
  //console.log(dates.endDate)
  let [result] = await connectDb.query(
    `
    SELECT r.startDate, r.endDate, c.name AS customerName, c.address AS customerAddress, ca.*
    FROM reservation r
    JOIN customer c ON r.customerId = c.customerId
    JOIN cars ca ON r.plateId = ca.plateId
    WHERE r.startDate >= ? AND r.endDate <= ?`,
    [dates.startDate, dates.endDate]
  );

  res.status(201).json({ reservations: result });
};

// POST
const getReseravtionOfSingleCustomer = async (req, res) => {
  let { customerId } = req.body;
  let [result] = await connectDb.query(
    `SELECT r.startDate, r.endDate, c.*, ca.model, ca.plateId
    FROM reservation r
    JOIN customer c ON r.customerId = c.customerId
    JOIN cars ca ON r.plateId = ca.plateId
    WHERE c.customerId = ?`,
    [customerId]
  );
  res.status(201).json({ reservations: result || [] });
};

const addNewReservation = async (req, res) => {
  const data = req.body;
  console.log({ data });
  const [result] = await connectDb.query(
    `
  INSERT INTO reservation (
    payment,
    startDate,
    endDate,
    customerId,
    plateId
) VALUES (
  ?,
  ?,
  ?,
  ?,
  ?
)`,
    [data.payment, data.startDate, data.endDate, data.customerId, data.plateId]
  );
  res.status(201).json({ reservations: result });
};

const removeReservation = async (req, res) => {
  let { reservationId } = req.body;
  let [result] = await connectDb.query(
    `DELETE FROM reservation WHERE reservationId = ? ;`,
    [reservationId]
  );
  res.status(201).json({ reservations: result });
};

const totalRevenue = async (req, res) => {
  let [result] =
    await connectDb.query(`SELECT SUM(payment* DATEDIFF(endDate, startDate)) AS totalRevenue
  FROM reservation`);
  res.status(201).json(result[0]);
};

const totalRevenueOnPeriod = async (req, res) => {
  let data = req.body;
  let month = data.month;
  let year = data.year;
  console.log(year);
  const today = new Date();
  const todaysDate = today.toISOString().split("T")[0];
  const currentYear = today.getFullYear();
  let startDate = "";
  if (month) {
    startDate = `${year || currentYear}-${month}-01`;
  } else {
    startDate = `${year || currentYear}-01-01`;
  }
  console.log({ todaysDate, startDate });
  let [result] = await connectDb.query(
    `SELECT SUM(payment*DATEDIFF(endDate, startDate)) AS totalRevenue
  FROM reservation
  WHERE startDate BETWEEN ? AND ?`,
    [startDate, todaysDate]
  );
  res.status(201).json(result[0]);
};

const totalNumOfReservations = async (req, res) => {
  let [result] =
    await connectDb.query(`SELECT COUNT(reservationId) AS reservations_num
  FROM reservation`);
  res.status(201).json(result[0]);
};

export {
  getAllReservationOnPeriod,
  getReseravtionOfSingleCustomer,
  getAllReservation,
  addNewReservation,
  removeReservation,
  totalRevenue,
  totalNumOfReservations,
  totalRevenueOnPeriod,
};
