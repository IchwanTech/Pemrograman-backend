//Isinya fungsi-fungsi untuk mengelola data produk
import dataProduct from "../model/product.js";

const getAll = (req, res) => {
  res.json({
    status: 200,
    message: "Data produk",
    data: dataProduct,
  });
};

const editData = (req, res) => {
  res.json({
    status: 200,
    message: "Edit data Produk",
    data: "Edit Data Produk",
  });
};

// fungsi :
// 1. menghapus
// 2. melihat data berdasarkan indx
// 3. logika lainnya (termasuk validasi)

export { getAll, editData };
