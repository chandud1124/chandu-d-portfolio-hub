import { Plugin } from 'vite';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

interface ImageOptimizationOptions {
  quality?: number;
  formats?: ('webp' | 'avif' | 'png' | 'jpg')[];
  widths?: number[];
}

export function imageOptimizer(options: ImageOptimizationOptions = {}): Plugin {
  const {
    quality = 85,
    formats = ['webp', 'avif', 'jpg'],
    widths = [320, 640, 960, 1280, 1920]
  } = options;

  return {
    name: 'vite-plugin-image-optimizer',
    load(id) {
      // Handle image imports with query parameters
      if (/\.(jpg|jpeg|png|gif|webp|avif)(\?.*)?$/.test(id)) {
        const [filePath, query] = id.split('?');
        const params = new URLSearchParams(query || '');

        const format = params.get('format') as 'webp' | 'avif' | 'png' | 'jpg' || 'jpg';
        const width = params.get('w') ? parseInt(params.get('w')!) : null;
        const q = params.get('q') ? parseInt(params.get('q')!) : quality;

        if (format || width) {
          // Return a virtual module that will be processed
          return `export default "${filePath}?format=${format}&w=${width}&q=${q}";`;
        }
      }
    },
    configureServer(server) {
      server.middlewares.use('/@image', async (req, res, next) => {
        const url = new URL(req.url!, `http://${req.headers.host}`);
        const imagePath = url.searchParams.get('src');
        const format = url.searchParams.get('format') as 'webp' | 'avif' | 'png' | 'jpg';
        const width = url.searchParams.get('w') ? parseInt(url.searchParams.get('w')!) : null;
        const quality = url.searchParams.get('q') ? parseInt(url.searchParams.get('q')!) : 85;

        if (!imagePath) return next();

        const fullPath = path.resolve(process.cwd(), 'src', imagePath.replace('@/', ''));

        try {
          let pipeline = sharp(fullPath);

          if (width) {
            pipeline = pipeline.resize(width, null, {
              withoutEnlargement: true,
              fit: 'inside'
            });
          }

          if (format === 'webp') {
            pipeline = pipeline.webp({ quality });
          } else if (format === 'avif') {
            pipeline = pipeline.avif({ quality: Math.min(quality - 5, 80) });
          } else if (format === 'png') {
            pipeline = pipeline.png({ quality });
          } else {
            pipeline = pipeline.jpeg({ quality });
          }

          const buffer = await pipeline.toBuffer();

          res.setHeader('Content-Type', `image/${format}`);
          res.setHeader('Cache-Control', 'public, max-age=31536000');
          res.end(buffer);
        } catch (error) {
          console.error('Image optimization error:', error);
          next();
        }
      });
    },
    generateBundle(options, bundle) {
      // Process images during build
      const imageAssets = Object.keys(bundle).filter(key =>
        /\.(jpg|jpeg|png|gif|webp|avif)$/.test(key)
      );

      for (const assetName of imageAssets) {
        const asset = bundle[assetName] as any;
        if (asset.type === 'asset' && asset.fileName) {
          // Generate optimized versions
          const sourcePath = path.resolve(process.cwd(), 'src', asset.fileName.replace(/^assets\//, ''));

          if (fs.existsSync(sourcePath)) {
            // Generate WebP version
            const webpName = asset.fileName.replace(/\.(jpg|jpeg|png)$/, '.webp');
            const webpBuffer = sharp(sourcePath).webp({ quality }).toBuffer();

            (bundle as any)[webpName] = {
              type: 'asset',
              fileName: webpName,
              source: webpBuffer
            };

            // Generate AVIF version
            const avifName = asset.fileName.replace(/\.(jpg|jpeg|png)$/, '.avif');
            const avifBuffer = sharp(sourcePath).avif({ quality: Math.min(quality - 5, 80) }).toBuffer();

            (bundle as any)[avifName] = {
              type: 'asset',
              fileName: avifName,
              source: avifBuffer
            };
          }
        }
      }
    }
  };
}