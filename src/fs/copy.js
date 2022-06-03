import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';

const copyDirectory = async (src, destination) => {
  const items = await readdir(src, { withFileTypes: true });
  await mkdir(destination);
  for (const item of items) {
    const srcPath = join(src, item.name);
    const destinationPath = join(destination, item.name);
    if (item.isDirectory()) {
      await copyDirectory(srcPath, destinationPath);
    } else {
      await copyFile(srcPath, destinationPath);
    }
  }
};

export const copy = async () => {
  const __dirname = await getDirname(import.meta.url);
  const pathToSourceDir = join(__dirname, 'files');
  const pathToCopyDir = join(__dirname, 'files_copy');
  try {
    const isSourceDirExists = await exists(pathToSourceDir);
    const isCopyDirExists = await exists(pathToCopyDir);
    if (!isSourceDirExists || isCopyDirExists) {
      throw new Error('FS operation failed');
    }
    await copyDirectory(pathToSourceDir, pathToCopyDir);
  } catch (error) {
    process.stderr.write(error.message);
    process.exit(1);
  }
};

const exists = (path) => {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.F_OK, (error) => {
      if (!error) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

const getDirname = async (url) => {
  return new Promise((resolve) => {
    const __filename = fileURLToPath(url);
    const __dirname = dirname(__filename);
    resolve(__dirname);
  });
};

copy();

