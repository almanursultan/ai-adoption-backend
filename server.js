import express from "express";
import cors from "cors";
import quizRoutes from "./src/routes/quizRoutes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the  API Backend!");
});

app.use("/api", quizRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
