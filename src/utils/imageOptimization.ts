import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

interface ImageOptimizationOptions {
  quality?: number;
  formats?: ('webp' | 'avif' | 'png' | 'jpg')[];
  widths?: number[];
}

export const optimizeImage = async (
  inputPath: string,
  outputDir: string,
  options: ImageOptimizationOptions = {}
) => {
  const {
    quality = 85,
    formats = ['webp', 'avif', 'jpg'],
    widths = [320, 640, 960, 1280]
  } = options;

  const inputBuffer = fs.readFileSync(inputPath);
  const filename = path.basename(inputPath, path.extname(inputPath));

  const results: { [key: string]: string[] } = {};

  for (const format of formats) {
    results[format] = [];

    for (const width of widths) {
      const outputPath = path.join(outputDir, `${filename}-${width}.${format}`);

      await sharp(inputBuffer)
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .toFormat(format, {
          quality: format === 'avif' ? Math.min(quality - 5, 80) : quality,
          effort: format === 'avif' ? 4 : undefined
        })
        .toFile(outputPath);

      results[format].push(outputPath);
    }
  }

  return results;
};

export const generateResponsiveImages = async (
  imagePaths: string[],
  outputDir: string
) => {
  const results: { [key: string]: any } = {};

  for (const imagePath of imagePaths) {
    const filename = path.basename(imagePath, path.extname(imagePath));
    results[filename] = await optimizeImage(imagePath, outputDir);
  }

  return results;
};

// Utility to get the best supported format
export const getOptimalImageSrc = (
  basePath: string,
  format: 'webp' | 'avif' | 'jpg' = 'webp'
) => {
  return `${basePath}?format=${format}&q=85`;
};

// Generate srcSet for responsive images
export const generateSrcSet = (
  basePath: string,
  format: 'webp' | 'avif' | 'jpg' = 'webp',
  widths: number[] = [320, 640, 960, 1280]
) => {
  return widths
    .map(width => `${basePath}?format=${format}&w=${width}&q=85 ${width}w`)
    .join(', ');
};