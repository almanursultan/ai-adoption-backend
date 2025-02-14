import express from "express";
import { getGuideDetails } from "../controllers/guideController.js";

const router = express.Router();

router.get("/guide/:toolName", getGuideDetails);

export default router;
