import mahasiswa from "./model.js";

const tampil = (req, res) => {
  res.json({
    status: 200,
    message: "Data berhasil didapatkan",
    data: mahasiswa,
  });
};

export default tampil;
