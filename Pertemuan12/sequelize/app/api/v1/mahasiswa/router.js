import {
  getData,
  createData,
  findByPK,
  deleteData,
  updateData,
} from "./controller.js";
import express from "express";

const router = express.Router();

router.get("/mahasiswa", getData);
router.get("/mahasiswa/:id", findByPK);
router.post("/mahasiswa/create", createData);
router.delete("/mahasiswa/:id", deleteData);
router.put("/mahasiswa/:id", updateData);

export default router;
