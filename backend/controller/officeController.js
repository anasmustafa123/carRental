// @desc get all
import connectDb from "../config/db.js";

const addNewOffice = async (req, res) => {
  const data = req.body;
  console.log({ data });
  const [result] = await connectDb.query(
    `
    INSERT INTO office (
        location,officeId
    ) VALUES (
  ?,
  ?
)`,
    [data.location, data.officeId]
  );
  res.status(201).json({ reservations: result });
};


const totalNumOfOffices = async (req, res) => {
  let [result] = await connectDb.query(`SELECT COUNT(officeId) AS offices_num
  FROM office`);
  res.status(201).json(result[0]);
};


const getOffices = async (req, res) => {
  let [result] = await connectDb.query(`SELECT location FROM office`);
  console.log(result);
  res.status(201).json(result);
};

export { addNewOffice, totalNumOfOffices, getOffices };
