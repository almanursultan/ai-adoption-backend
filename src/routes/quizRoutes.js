import express from "express";
import { getQuestions, getSuggestions } from "../controllers/quizController.js";

const router = express.Router();

router.get("/questions", getQuestions);

router.post("/suggestions", getSuggestions);

export default router;
