import { access, readdir } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    try {
        await access(`${__dirname}/files/`);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        const files = await readdir(`${__dirname}/files/`);
        for (const file of files)
            console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

// list()