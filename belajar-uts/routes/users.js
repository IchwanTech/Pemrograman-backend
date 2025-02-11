import express, { Router } from "express";
import { tampilByid, tampilData } from "../controller/users.js";

const router = express.Router();

router.get("/", tampilData);
router.get("/:id", tampilByid);

export default router;
