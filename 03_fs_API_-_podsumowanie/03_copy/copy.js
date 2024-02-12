






























//import fs from 'fs';
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
// const copy = async (oldPath, newPath) => {
//     const pathTo = path.join(newPath, path.basename(oldPath))
//     const fileExtName = path.extname(oldPath)
//
//     const oldFileContent = await fs.promises.readFile(oldPath, 'UTF-8')
//
//     try {
//         await fs.promises.access(pathTo, fs.constants.F_OK)
//         const pathToNew = path.join(newPath, `${path.basename(oldPath, fileExtName)}_${Math.floor(Math.random() * 10000)}${fileExtName}`)
//         await fs.promises.writeFile(
//             pathToNew,
//             oldFileContent
//         )
//     } catch {
//         await fs.promises.writeFile(
//             pathTo,
//             oldFileContent
//         )
//     }
//
// }
//
//
// const main = async () => {
//     await dirCreator()
//     await copy('./dir_one/text.txt', './dir_two/')
// }
//
// main()