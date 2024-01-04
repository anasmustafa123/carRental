import connectDb from "../config/db.js";

// @desc get cars with specs
// POST
const getAvalibleCars = async (req, res) => {
  let specs = req.body;
  let [result] = await connectDb.query(
    `
    SELECT cars.model, cars.carStatus, cars.plateId, cars.year, cars.color, cars.seatAmount, cars.image_url
        from cars 
        where cars.carStatus = 'A' AND cars.officeId = ?
        union
        SELECT cars.model, cars.carStatus, cars.plateId, cars.year, cars.color, cars.seatAmount, cars.image_url
        FROM reservation
        RIGHT JOIN cars ON reservation.plateId = cars.plateId
        WHERE cars.officeId = ? AND (reservation.startDate < ?
               AND reservation.endDate < ?) OR 
               (reservation.startDate > ?
               AND reservation.endDate > ?)`,
    [
      specs.officeId || 2,
      specs.officeId || 2,
      specs.startDate || "1550-01-01",
      specs.endDate || "3000-01-01",
      specs.startDate || "1550-01-01",
      specs.endDate || "3000-01-01",
    ]
  );
  res.status(201).json(result);
};

// @desc
const getAllCarsStatusOnDay = async (req, res) => {
  const { day } = req.body;
  let [result] = await connectDb.query(
    `SELECT ca.*, DATE_FORMAT(r.startDate, '%Y-%m-%d') AS startDate, DATE_FORMAT(r.endDate, '%Y-%m-%d') AS endDate
    FROM cars ca
    JOIN reservation r ON ca.plateId = r.plateId AND (? BETWEEN r.startDate AND r.endDate)`,
    [day]
  );
  res.status(201).json({ carsStatus: result || [] });
};

// problem
const addNewCar = async (req, res) => {
  const data = req.body;
  console.log({ data });
  const [result] = await connectDb.query(
    `
    INSERT INTO cars (
      model,year,color,seatAmount,officeId,plateId,image_url,carStatus) VALUES (
      ?,?,?,?,?,?,?,?
)`,
    [
      data.model,
      data.year,
      data.color,
      data.seatAmount,
      data.officeId,
      data.plateId,
      data.image_url,
      data.carStatus,
    ]
  );
  res.status(201).json({ cars: result });
};

const removeCar = async (req, res) => {
  let { plateId } = req.body;
  let [result] = await connectDb.query(`DELETE FROM cars WHERE plateId = ?`, [
    plateId,
  ]);
  res.status(201).json({ car: result });
};

const totalNumOfCars = async (req, res) => {
  let [result] = await connectDb.query(`SELECT COUNT(plateId) AS cars_num
  FROM cars`);
  res.status(201).json(result[0]);
};

const getAll = async (req, res) => {
  let [result] = await connectDb.query(`SELECT *
FROM cars`);
  res.status(201).json(result);
};

export {
  getAvalibleCars,
  getAllCarsStatusOnDay,
  addNewCar,
  removeCar,
  totalNumOfCars,
  getAll,
};
