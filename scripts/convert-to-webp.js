const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Target directory jahan images hain
const TARGET_DIR = path.join(__dirname, '../public/images');

// Jo extensions convert karni hain
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

function walkAndConvert(dir) {
    if (!fs.existsSync(dir)) {
        console.error(`❌ Folder nahi mila: ${dir}`);
        return;
    }

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Agar folder hai to uske andar jao (Recursive call)
            walkAndConvert(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            
            if (SUPPORTED_EXTENSIONS.includes(ext)) {
                const webpPath = fullPath.replace(ext, '.webp');

                // Check karein agar webp pehle se bani hui hai to dobara na banaye
                if (!fs.existsSync(webpPath)) {
                    sharp(fullPath)
                        .webp({ quality: 80 }) // 80 quality optimization ke liye best hai
                        .toFile(webpPath)
                        .then(() => {
                            console.log(`✅ Converted: ${file} -> ${path.basename(webpPath)}`);
                        })
                        .catch((err) => {
                            console.error(`❌ Error converting ${file}:`, err.message);
                        });
                } else {
                    console.log(`⏭️ Skipped (Already exists): ${file}`);
                }
            }
        }
    });
}

console.log('🚀 WebP conversion shuru ho rahi hai...');
walkAndConvert(TARGET_DIR);