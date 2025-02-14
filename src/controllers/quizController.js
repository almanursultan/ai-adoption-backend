import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quizDataPath = path.join(__dirname, "../data/quizData.json");

const loadQuizData = () => {
  const data = fs.readFileSync(quizDataPath, "utf8");
  return JSON.parse(data);
};

export const getQuestions = (req, res) => {
  const quizData = loadQuizData();
  res.json({ questions: quizData.questions });
};

export const getSuggestions = (req, res) => {
  const { jobTitle, goal } = req.body;

  if (!jobTitle || !goal) {
    return res.status(400).json({ error: "Job title and goal are required." });
  }

  const quizData = loadQuizData();
  const suggestions = quizData.suggestions.filter(
    (item) => item.job_title === jobTitle && item.goal === goal
  );

  if (suggestions.length === 0) {
    return res
      .status(404)
      .json({ error: "No suggestion found for this job title and goal." });
  }

  res.json({ recommendation: suggestions[0] });
};
