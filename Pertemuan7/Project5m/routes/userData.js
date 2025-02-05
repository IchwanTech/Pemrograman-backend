import express from "express";
import {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userData.js";
import validasi from "../middleware/userData.js";
const router = express.Router();

router.get("/all", getAll);
router.get("/id/:id", getById);
router.post("/create", validasi, createUser);
router.put("/update/:id", validasi, updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
