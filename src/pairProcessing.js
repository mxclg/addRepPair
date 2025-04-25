import fs from 'fs';
import { espansoConfigBase } from './basePath.js';

const pairProcessing = (inputPair) => {

if (!inputPair || !inputPair.includes("=")) {
  console.error("Invalid input. Use format: trigger = replacement");
  process.exit(1);
}

let [trigger, replacement] = inputPair.split("=");
trigger = trigger.trim();
replacement = replacement.trim();

if (!fs.existsSync(espansoConfigBase)) {
  console.error("File not found: " + espansoConfigBase);
  process.exit(1);
}

const formattedBlock = `

  - trigger: "${trigger}"
    replace: "${replacement}"
    word: true`;

return fs.appendFileSync(espansoConfigBase, formattedBlock, "utf8");
};

export default pairProcessing;