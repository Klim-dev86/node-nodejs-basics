import { access, writeFile } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
    let isNewFileExist;

    try {
        await access(`${__dirname}/files/`);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access(`${__dirname}/files/newfile.txt`);
        isNewFileExist = true
    } catch {
        isNewFileExist = false
    }

    if(isNewFileExist) {
        throw new Error('FS operation failed');
    } else {
        writeFile(`${__dirname}/files/newfile.txt`, 'I am fresh and young', function (err) {
            if (err) throw err;
        })
    }
};

// create()
