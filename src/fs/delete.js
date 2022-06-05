import { access, unlink } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    try {
        await access(`${__dirname}/files/`);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access(`${__dirname}/files/fileToRemove.txt`);
        unlink(`${__dirname}/files/fileToRemove.txt`)
    } catch {
        throw new Error('FS operation failed');
    }
};

// remove()
