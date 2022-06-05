import { Worker, setEnvironmentData } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const performCalculations = async () => {
    const cpuNum = cpus().length;
    let workers = [];
    let num = 10;

    let result = [];

    const startWorker = (num) => {
        return new Promise((resolve, reject) => {
            setEnvironmentData('num', num);
            const worker = new Worker(`${__dirname}/worker.js`);
            workers.push(worker)

            worker.on('message', resolve)
            worker.on('error', reject)
            
        })
    }

    for(let i = 0; i < cpuNum; i++) {
        const worker = startWorker(num);
        try{
            const res = await worker;
            result.push({
                status: 'resolved',
                data: await res.result,
            })
        } catch {
            result.push({
                status: 'rejected',
                data: null,
            })
        }
        num++;
    }

    Promise.all(workers).then(()=>{
        return result
    })

};

// performCalculations()