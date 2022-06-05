import { mkdir, access, copyFile, readdir} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
    let isDestDirExist;

    try {
        await access(`${__dirname}/files/`);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access(`${__dirname}/files_copy/`);
        isDestDirExist = true;
    } catch {
        isDestDirExist = false;
    }

    if(isDestDirExist) {
        throw new Error('FS operation failed');
    } else {
        mkdir(`${__dirname}/files_copy/`);
        try {
            const files = await readdir(`${__dirname}/files/`);
            for (const file of files) {
                copyFile(`${__dirname}/files/${file}`, `${__dirname}/files_copy/${file}`);
            }
        } catch (err) {
            throw new Error('FS operation failed');
        }
    }
};

// copy()