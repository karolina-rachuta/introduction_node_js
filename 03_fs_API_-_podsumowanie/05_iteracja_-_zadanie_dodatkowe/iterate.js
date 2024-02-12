





























// import fs from 'fs';
//
// import path from 'path';
//
//
// async function readDirRecursive(directory) {
//
//     try {
//
//         const filesOrDir = await fs.promises.readdir(directory); // A
//
//
//         for (const file of filesOrDir) {
//
//             console.log(file);
//
//             const stats = await fs.promises.stat(path.join(directory, file));
//
//             if (stats.isDirectory()) {
//
//                 // B
//
//                 await readDirRecursive(path.join(directory, file)); // C
//
//             }
//
//         }
//
//     } catch (err) {
//
//         console.log(err);
//
//     }
//
// }
//
//
// readDirRecursive('./one');