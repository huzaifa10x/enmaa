const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = path.join(__dirname, "public/images/Services-images/Tendering-Services");
const outputFolder = path.join(__dirname, "public/compressed-Services-images/Tendering-Services");

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file);

    sharp(inputPath)
        .resize({ width: 1200 }) // resize (optional)
        .jpeg({ quality: 70 })   // compress
        .toFile(outputPath)
        .then(() => console.log(`✅ Compressed: ${file}`))
        .catch(err => console.error(`❌ Error: ${file}`, err));
});