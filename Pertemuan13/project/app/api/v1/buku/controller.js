import { Buku, Kategori } from "../models/relation.js";

const getData = async (req, res) => {
  try {
    const buku = await Buku.findAll({
      include: {
        model: Kategori,
        attributes: ["nama_kategori"],
      },
    });
    res.status(200).json({
      status: 200,
      message: "Data Buku",
      data: buku,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
};

export { getData, getById };
