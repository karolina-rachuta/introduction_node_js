




























//import fs from 'fs';
// import path from 'path';
//
// async function createFileStructure() {
//
//   try {
//
//     const data = await fs.promises.readFile('poem.txt', 'utf-8');
//
//     const poemArray = data.split(/[\r\n]+/);
//
//     poemArray.forEach(async (poemLine, index) => {
//
//       try {
//
//         await fs.promises.mkdir(`./dir_${index + 1}`);
//
//         await fs.promises.writeFile(
//
//           `./dir_${index + 1}/file_${index + 1}`,
//
//           poemLine,
//
//         );
//
//       } catch (err) {
//
//         console.log(err);
//
//       }
//
//     });
//
//   } catch (err) {
//
//     console.log(err);
//
//   }
//
// }
//
// async function addLineToFile() {
//
//   try {
//
//     const dirs = await fs.promises.readdir('./');
//
//     const poemDirs = dirs.filter((dir) => dir.startsWith('dir_'));
//
//
//     poemDirs.forEach(async (dir) => {
//
//       try {
//
//         const [file] = await fs.promises.readdir(`./${dir}`);
//
//         const filePath = path.join(`./${dir}`, file);
//
//         const poemLine = await fs.promises.readFile(filePath, 'utf-8');
//
//
//         await fs.promises.appendFile(
//
//           filePath,
//
//           poemLine
//
//             .split('')
//
//             .reverse()
//
//             .join(''),
//
//         );
//
//       } catch (err) {
//
//         console.log(err);
//
//       }
//
//     });
//
//   } catch (err) {
//
//     console.log(err);
//
//   }
//
// }
//
// async function findRelativePath() {
//
//   const file11 = path.resolve('file11.txt');
//
//   const file15 = path.resolve('file15.txt');
//
//   const pathBetween = path.relative(file11, file15);
//
//   console.log(pathBetween);
//
// }
//
// async function removeStructure() {
//
//   try {
//
//     const dirs = await fs.promises.readdir('./');
//
//     const poemDirs = dirs.filter((dir) => dir.startsWith('dir_'));
//
//
//     poemDirs.forEach(async (dir) => {
//
//       try {
//
//         const [file] = await fs.promises.readdir(`./${dir}`);
//
//         const filePath = path.join(`./${dir}`, file);
//
//         await fs.promises.unlink(filePath);
//
//         await fs.promises.rmdir(dir);
//
//       } catch (err) {
//
//         console.log(err);
//
//       }
//
//     });
//
//   } catch (err) {
//
//     console.log(err);
//
//   }
//
// }