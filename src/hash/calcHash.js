import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const data = await fs.readFile(`${__dirname}/files/fileToCalculateHashFor.txt`, {
        encoding: 'utf8',
    });

    const hash = crypto.createHash('sha256');
    hash.update(data);

    return hash.digest('hex');
};
