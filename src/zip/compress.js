import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
  createReadStream,
  createWriteStream
} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const destination = createWriteStream(`${__dirname}/archive.gz`);
    
    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

// compress()