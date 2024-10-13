//import * as fs from 'fs'; //callback based fs import
import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import logger from '../lib/logger.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const filePath = path.join(__dirname, '../../sample.json');

async function fileRead(req, res){
    try {
        logger.info(`FileController :: File Read started`);
        const fileData = await read();
        logger.info(`FileController :: File Read completed`);
        res.status(200).send(fileData);
        /* 
        //Promise based syntax
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                console.error(`Error :: ${err}`);        
            }

            logger.info('for data..........', data);
            res.send(data);
        }); */
    } catch (err) {
        logger.error(`Error in reading file :: ${err}`);
        res.status(500).send('Error in reading file');
    }
}

async function read() {
    return await fs.readFile(filePath, 'utf-8');
}

async function fileUpdate(req, res) {
    try {
        logger.info(`FileController :: File Update started`);
        const fileData = JSON.parse(await read());
        const data = req.body;
        fileData.push(data);
        const dataString = JSON.stringify(fileData, null, 4);
        fs.writeFile(filePath, dataString, 'utf-8');
        logger.info(`FileController :: File Update completed`);
        res.status(200).send(fileData);
    } catch(err) {
        logger.error(`Error in Updating file :: ${err}`);
        res.status(500).send('Error in Updating file');
    }
    
}
export default {
    fileRead,
    fileUpdate
};