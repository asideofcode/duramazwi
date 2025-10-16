const fs = require("fs");
const path = require("path");

// Backup existing data.json
const dataPath = path.join(__dirname, "./data.json");
const backupPath = path.join(__dirname, "./data-backup-" + Date.now() + ".json");

if (fs.existsSync(dataPath)) {
  console.log("📦 Backing up existing data.json...");
  fs.copyFileSync(dataPath, backupPath);
  console.log(`✅ Backup created: ${backupPath}`);
} else {
  console.log("ℹ️  No existing data.json found to backup");
}
