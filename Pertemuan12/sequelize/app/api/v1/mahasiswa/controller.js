import model from "./model.js";

const getData = async (req, res) => {
  try {
    const data = await model.findAll();
    // buat response JSON nya
    res.json({
      status: 200,
      message: "Data berhasil didapatkan",
      data: data,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
};

const createData = async (req, res) => {
  try {
    const { nama } = req.body;
    if (!nama) {
      return res.status(400).json({
        status: 400,
        message: "Nama tidak boleh kosong, gessssss",
      });
    }

    const tambah = await model.create({ nama });

    return res.status(201).json({
      status: 201,
      message: "Data berhasil ditambahkan",
      data: tambah,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const findByPK = async (req, res) => {
  try {
    const idPK = req.params.id;
    const mahasiswaId = await model.findByPk(idPK);

    res.json({
      status: 200,
      message: "Data mahasiswa",
      data: mahasiswaId,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    await model.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      status: 200,
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.json({
      status: 400,
      message: error.message,
    });
  }
};

const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const nama = req.body.nama;
    await model.update(
      {
        nama,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({
      status: 200,
      message: "Data berhasil diubah",
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
};

export { getData, createData, findByPK, deleteData, updateData };
