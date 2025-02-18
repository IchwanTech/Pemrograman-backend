import { Buku, Kategori } from "../models/relation.js";

import { check, validationResult } from "express-validator";

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
  try {
    const buku = await Buku.findByPk(req.params.id, {
      include: {
        model: Kategori,
        attributes: ["nama_kategori"],
      },
    });

    if (!buku)
      return res.status(404).json({
        status: 404,
        message: "Data buku tidak ditemukan",
      });

    res.json({
      status: 200,
      message: "Data berhasil didapatkan",
      data: buku,
    });
  } catch (error) {
    res.json.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const validasi = [
  check("judul_buku")
    .not()
    .isEmpty()
    .withMessage("Judul Buku tidak boleh kosong")
    .isLength({ min: 3 })
    .withMessage("Judul buku minimal 3 karakter")
    .custom(async (value) => {
      const cekData = await Buku.findOne({
        where: {
          judul_buku: value,
        },
      });
      if (cekData) {
        return Promise.reject("Judul buku sudah ada");
      }
      return true;
    }),
  check("kategori_id")
    .not()
    .isEmpty()
    .withMessage("Kategori_id tidak boleh kosong"),
  check("penulis")
    .not()
    .isEmpty()
    .withMessage("Penulis tidak boleh kosong maniess"),
  check("deskripsi")
    .not()
    .isEmpty()
    .withMessage("Deskripsi tidak boleh kosong"),
];

// menambahkan field sampul di tabel buku
// menggunakan multer dan fs
const createData = async (req, res) => {
  try {
    const { judul_buku, kategori_id, penulis, deskripsi } = req.body;
    const sampulBuku = req.file.filename;
    const data = await Buku.create({
      judul_buku,
      kategori_id,
      penulis,
      deskripsi,
      sampul: sampulBuku,
    });

    res.status(201).json({
      status: 201,
      message: "Data berhasil ditambahkan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { judul_buku, penulis, kategori_id, deskripsi } = req.body;
    const cekId = await Buku.findByPk(id);

    if (!cekId) {
      return res.status(404).json({
        status: 404,
        message: "Data tidak ditemukan",
      });
    }

    const buku = await Buku.update(
      {
        judul_buku,
        kategori_id,
        penulis,
        deskripsi,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json({
      status: 200,
      message: "Data berhasil diperbarui",
      data: buku,
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: error.message,
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const cekId = await Buku.findByPk(id);

    if (!cekId) {
      return res.status(404).json({
        status: 404,
        message: "Data tidak ditemukan",
      });
    }

    await Buku.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: "Data tidak ditemukan",
    });
  }
};

export { getData, getById, createData, updateData, deleteData, validasi };
