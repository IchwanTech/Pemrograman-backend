import tampilClub from "./controller.js";
import express from "express";

const router = express.Router();

router.get("/", tampilClub);

export default router;