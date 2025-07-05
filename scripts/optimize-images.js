const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.gif'].includes(ext);
});

// Process each image
async function processImages() {
  console.log(`Found ${imageFiles.length} images to optimize`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const fileNameWithoutExt = path.parse(file).name;
    const outputPath = path.join(outputDir, `${fileNameWithoutExt}.webp`);
    
    try {
      // Skip if the optimized file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`Skipping ${file} - already optimized`);
        continue;
      }
      
      console.log(`Optimizing ${file}...`);
      
      // Convert to WebP with quality 80
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      const savedPercentage = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
      
      console.log(`✅ ${file} → ${fileNameWithoutExt}.webp (${savedPercentage}% smaller)`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error);
    }
  }
}

processImages().catch(console.error);
