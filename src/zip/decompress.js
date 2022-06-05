import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
  const fileContents = fs.createReadStream('archive.gz');
  const writeStream = fs.createWriteStream(`${__dirname}/fileToCompress.txt`);
  const unzip = zlib.createGunzip();
  fileContents.pipe(unzip).pipe(writeStream);
};

// decompress()
