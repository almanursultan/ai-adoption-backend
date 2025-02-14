import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const guideDataPath = path.join(__dirname, "../data/guideData.json");

const loadGuideData = () => {
  const data = fs.readFileSync(guideDataPath, "utf8");
  return JSON.parse(data);
};

export const getGuideDetails = (req, res) => {
  const { toolName } = req.params;
  const guideData = loadGuideData();

  const guide = guideData.guides.find((g) => g.name === toolName);

  if (!guide) {
    return res.status(404).json({ error: "Guide not found." });
  }

  res.json(guide);
};
