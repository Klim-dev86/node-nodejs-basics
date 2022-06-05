import { access, readFile } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {

    try {
        await access(`${__dirname}/files/fileToRead.txt`);
    } catch {
        throw new Error('FS operation failed');
    }
    
    try {
        const promise = readFile(`${__dirname}/files/fileToRead.txt`);
        const res = await promise
        console.log(res.toString());
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

// read()