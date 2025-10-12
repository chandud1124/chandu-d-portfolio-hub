import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const inputDir = 'src/assets';
const outputDir = 'public/optimized';

async function optimizeImages() {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Find all images
  const imageFiles = await glob('**/*.{jpg,jpeg,png}', { cwd: inputDir });

  console.log(`Found ${imageFiles.length} images to optimize`);

  for (const imageFile of imageFiles) {
    const inputPath = path.join(inputDir, imageFile);
    const outputBase = path.join(outputDir, path.parse(imageFile).name);

    console.log(`Processing ${imageFile}...`);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate multiple sizes and formats
    const sizes = [320, 640, 960, 1280, 1920];
    const formats = ['webp', 'avif', 'jpg'];

    for (const format of formats) {
      for (const size of sizes) {
        if (metadata.width && size > metadata.width) continue; // Skip if size is larger than original

        const outputPath = `${outputBase}-${size}.${format}`;

        await image
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFormat(format as any, {
            quality: format === 'avif' ? 80 : 85,
            effort: format === 'avif' ? 4 : undefined
          })
          .toFile(outputPath);
      }
    }

    // Also create original size versions
    for (const format of formats) {
      const outputPath = `${outputBase}-original.${format}`;

      await image
        .toFormat(format as any, {
          quality: format === 'avif' ? 80 : 85,
          effort: format === 'avif' ? 4 : undefined
        })
        .toFile(outputPath);
    }
  }

  console.log('Image optimization complete!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeImages().catch(console.error);
}

export { optimizeImages };