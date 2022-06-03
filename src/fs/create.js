import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exists } from '../additions/additions.js';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const text = 'I am fresh and young';
  const pathToFile = join(__dirname, 'files', 'fresh.txt');
  try {
    const isFileExists = await exists(pathToFile);
    if (isFileExists) {
      throw new Error('FS operation failed');
    }
    await writeFile(pathToFile, text);
  } catch (error) {
    process.stderr.write(error.message);
    process.exit(1);
  }
};

create();

