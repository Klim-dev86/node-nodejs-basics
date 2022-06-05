import { createReadStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
   
    const readStream = await createReadStream(`${__dirname}/files/fileToRead.txt`);

    readStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readStream.on('data', (chunk) => {
        console.log(chunk.toString());
    })
};

// read()
