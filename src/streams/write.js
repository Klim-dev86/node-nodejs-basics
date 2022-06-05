import { createWriteStream } from 'fs';
import readline from 'readline';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const writeStream = await createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        writeStream.write(line)
    })
};

// write()
