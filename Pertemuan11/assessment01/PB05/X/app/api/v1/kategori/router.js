import express from "express";
import show from "./controller.js";

const router = express.Router();

router.get("/", show);

export default router;
