import express from "express";
import { getAll, editData } from "../controller/product.js";

const router = express.Router();

//INI CONTOH 1
// import data dari model
// import dataProduct from "../model/product.js";
// router.get("/", (req, res) => {
//   res.json({
//     status: 200,
//     message: "Data Product ",
//     data: {
//       produk: dataProduct,
//     },
//   });
// });

// router.get("/edit/:id", (req, res) => {
//   const { id } = req.params;
//   res.json({
//     status: 200,
//     message: "Edit Data product",
//     data: {
//       id,
//     },
//   });
// });

// INI CONTOH 2 Yang Lebih simple
router.get("/", getAll);
router.get("/edit", editData);

export default router;
