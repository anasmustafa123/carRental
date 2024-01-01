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

export { addNewOffice };
