import express from "express";
import {
  show,
  getById,
  createData,
  deleteData,
  updateData,
} from "./controller.js";

const router = express.Router();

router.get("/kategori", show);
router.get("/kategori/:id", getById);
router.post("/kategori/create", createData);
router.delete("/kategori/:id", deleteData);
router.put("/kategori/:id", updateData);

export default router;
