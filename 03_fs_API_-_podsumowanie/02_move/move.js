import fs from 'fs';
import path from 'path';

async function createFile (obecna) {
    try {
        await fs.promises.mkdir('./dir_one');
        await fs.promises.writeFile(obecna, 'przeniesiony');
    } catch (error) {
        console.error(error);
    }

}

async function moveFile (obecna, docelowa ) {
    try {
        await createFile(obecna, docelowa);
        await fs.promises.mkdir('./dir_two');
        await fs.promises.unlink(obecna);
        await fs.promises.writeFile(docelowa, 'udalo sie');
    } catch (error) {
        console.error(error);
    }

}

moveFile('./dir_one/move.txt' , './dir_two/move.txt');
