import dataUser from "../model/userData.js";

// GET all users
const getAll = (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Data user berhasil diambil",
    data: dataUser,
  });
};

// GET user by ID
const getById = (req, res) => {
  const { id } = req.params;
  const user = dataUser.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: "Data user tidak ditemukan",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "Data user berhasil didapatkan",
    data: user,
  });
};

// CREATE user
const createUser = (req, res) => {
  const { nama, email, password } = req.body;

  if (!nama || !email || !password) {
    return res.status(400).json({
      status: 400,
      message: "Data user tidak lengkap",
    });
  }

  const newUser = {
    id: dataUser.length + 1,
    nama,
    email,
    password,
  };

  dataUser.push(newUser);

  return res.status(201).json({
    status: 201,
    message: "Data user berhasil ditambahkan",
    data: newUser,
  });
};

// UPDATE user
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nama, email, password } = req.body;

  const user = dataUser.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: "Data user tidak ditemukan",
    });
  }

  if (nama) user.nama = nama;
  if (email) user.email = email;
  if (password) user.password = password;

  return res.status(200).json({
    status: 200,
    message: "Data user berhasil diperbarui",
    data: user,
  });
};

// DELETE user menggunakan slice
const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = dataUser.findIndex((user) => user.id == id);

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: "Data user tidak ditemukan",
    });
  }
};

export { getAll, getById, createUser, updateUser, deleteUser };
