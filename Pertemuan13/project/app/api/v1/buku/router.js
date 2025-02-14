import express from "express";
import { getData } from "./controller.js";

const router = express.Router();

router.get("/buku", getData);

export default router;
