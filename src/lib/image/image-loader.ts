import { CompressError, MAX_PIXELS } from './file-validation';

export interface LoadedImage {
  source: CanvasImageSource;
  width: number;
  height: number;
  close(): void;
}

export async function loadImage(file: Blob): Promise<LoadedImage> {
  let img: LoadedImage;
  try {
    const bmp = await createImageBitmap(file);
    img = { source: bmp, width: bmp.width, height: bmp.height, close: () => bmp.close() };
  } catch {
    img = await new Promise<LoadedImage>((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const el = new Image();
      el.onload = () => resolve({ source: el, width: el.naturalWidth, height: el.naturalHeight, close: () => URL.revokeObjectURL(url) });
      el.onerror = () => { URL.revokeObjectURL(url); reject(new CompressError('invalid', 'The file could not be decoded as an image. It may be corrupt.')); };
      el.src = url;
    });
  }
  if (!img.width || !img.height) { img.close(); throw new CompressError('invalid', 'The image has no valid dimensions.'); }
  if (img.width * img.height > MAX_PIXELS) { img.close(); throw new CompressError('too-many-pixels', `Image is larger than ${MAX_PIXELS / 1e6} megapixels, which is too big to process safely in a browser.`); }
  return img;
}
