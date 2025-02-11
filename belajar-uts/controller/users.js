import users from "../model/users.js";

const tampilData = (req, res) => {
  res.json({
    status: 200,
    message: "Data berhasil Didapatkan",
    data: users,
  });
};

const tampilByid = (req, res) => {
  const { id } = req.body;

  const data = users.find((data) => data.id == id);

  res.json({
    status: 200,
    message: "Data berhasil didapatlkan",
    data: data,
  });
};

const createData = (req, res) => {
  const { nama } = req.body;
  const id = users.length++;

  dataBaru = {
    id,
    nama,
  };

  users.push(dataBaru);

  res.json({
    id,
    nama,
  });
};

export { tampilData, tampilByid };
