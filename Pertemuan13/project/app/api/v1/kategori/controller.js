import model from "./model.js";

const show = async (req, res) => {
  try {
    const data = await model.findAll();
    return res.status(200).json({
      status: 200,
      message: "Data berhasil didapatkan",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: "Data tidak ditemukan",
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Data tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Data berhasil didapatkan",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: "Data tidak ditemukan",
    });
  }
};

const createData = async (req, res) => {
  try {
    const { nama_kategori } = req.body;

    if (!nama_kategori) {
      return res.status(400).json({
        status: 400,
        message: "Data kategori harus diisi",
      });
    }

    const cekNama = await model.findOne({
      where: {
        nama_kategori,
      },
    });
    if (cekNama) {
      return res.status(409).json({
        status: 409,
        message: "Nama kategori sudah ada, gunakan nama lain",
      });
    }

    const tambah = await model.create({
      nama_kategori,
    });
    return res.status(201).json({
      status: 201,
      message: "Data berhasil ditambahkan",
      data: tambah,
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: "Data tidak ditemukan",
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const cekId = await model.findByPk(id);

    if (!cekId) {
      return res.status(404).json({
        status: 404,
        message: "Data tidak ditemukan",
      });
    }

    await model.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({
      st,
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: "Data tidak ditemukan",
    });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama_kategori } = req.body;
    const cekId = await model.findByPk(id);

    if (!cekId) {
      return res.status(404).json({
        status: 404,
        message: "Data tidak ditemukan",
      });
    }

    await model.update(
      {
        nama_kategori,
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
    });
  } catch (error) {
    return res.status(500).json({
      status: 404,
      message: "Data tidak ditemukan",
    });
  }
};

export { show, getById, createData, deleteData, updateData };
