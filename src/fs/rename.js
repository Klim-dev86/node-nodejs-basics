import { access, rename as _rename } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    let isNewFileExist;

    try {
        await access(`${__dirname}/files/wrongFilename.txt`);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access(`${__dirname}/files/properFilename.md`);
        console.log('here')
        isNewFileExist = true;
    } catch {
        isNewFileExist = false;
    }

    if(isNewFileExist) {
        throw new Error('FS operation failed');
    } else {
        _rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`, function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
    }
};
