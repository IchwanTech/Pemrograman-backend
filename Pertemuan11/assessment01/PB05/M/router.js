import express from "express";
import tampil from "./controller.js";
const router = express.Router();

router.get("/", tampil);
