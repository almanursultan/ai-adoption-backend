import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const guideDataPath = path.join(__dirname, "../data/guideData.json");

// Load guide data from JSON file
const loadGuideData = () => {
  try {
    const data = fs.readFileSync(guideDataPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading guide data:", error);
    return { guides: [] }; // Return empty array if there's an error
  }
};

// Controller function to fetch guide details
export const getGuideDetails = (req, res) => {
  const { toolName } = req.params;

  if (!toolName) {
    return res.status(400).json({ error: "Missing toolName parameter." });
  }

  console.log("Requested toolName:", toolName); // Debugging log

  const guideData = loadGuideData();
  const guide = guideData.guides.find((g) => g.name === toolName);

  if (!guide) {
    return res
      .status(404)
      .json({ error: `Guide not found for toolName: ${toolName}` });
  }

  res.json(guide);
};
