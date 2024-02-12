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


//MOVE
//
// import fs from 'fs';
// import path from 'path'
//
// const dir1Path = './dir_one'
//
// const dir2Path = './dir_two'
//
// const dirCreator = async () => {
//     await fs.promises.mkdir(
//         dir1Path,
//         { recursive: true })
//     await  fs.promises.mkdir(
//         dir2Path,
//         { recursive: true })
//     await fs.promises.writeFile(
//         path.join(dir1Path, 'text.txt'),
//         'To jest nasz plik'
//     )
// }
//
// const move = async (oldPath, newPath) => {
//     const pathTo = path.join(newPath, path.basename(oldPath))
//
//     const oldFileContent = await fs.promises.readFile(oldPath, 'UTF-8')
//     console.log(oldFileContent, pathTo)
//
//     await fs.promises.writeFile(
//         pathTo,
//         oldFileContent
//     )
//
//     await fs.promises.unlink(
//         oldPath
//     )
// }
//
//
// const main = async () => {
//     await dirCreator()
//     await move('./dir_one/text.txt', './dir_two/')
// }
//
// main()