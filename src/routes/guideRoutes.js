import express from "express";
import { getGuideDetails } from "../controllers/guideController.js";

const router = express.Router();

router.get("/guides/:toolName", getGuideDetails);

export default router;
