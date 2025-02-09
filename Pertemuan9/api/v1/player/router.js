import express from "express";
import { tampilPlayer } from "./controller.js";

const router = express.Router();

router.get("/", tampilPlayer);

export default router;