import { v2 as cloudinary } from 'cloudinary';
import { env } from '../config/env.js';

if (env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
  });
}

export async function uploadImageToCloudinary(filePath: string): Promise<string> {
  if (!env.CLOUDINARY_CLOUD_NAME) {
    return filePath; // Fallback to local path if Cloudinary is not configured
  }

  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'portfolio',
  });

  return result.secure_url;
}
