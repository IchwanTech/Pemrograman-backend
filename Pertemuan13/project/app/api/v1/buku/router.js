import express from "express";
import {
  getData,
  getById,
  createData,
  updateData,
  validasi,
  deleteData,
} from "./controller.js";

import upload from "../middleware/uploadImage.js";

const router = express.Router();

router.get("/buku", getData);
router.get("/buku/:id", getById);
router.post("/buku/create", validasi, upload.single("sampul"), createData);
router.patch("/buku/update/:id", updateData);
router.delete("/buku/delete/:id", deleteData);

export default router;
