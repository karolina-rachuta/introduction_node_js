const getRandomNumber = (max = 100_000_000) => Math.floor(Math.random() * max);
import fs from "fs";
import path from "path";

const __dirname = import.meta.url
    .replace("file://", "")
    .replace("stats_and_path.js", "");

console.log(__dirname);


// 1. // Create dir

async function createDir() {
    try {
        await fs.promises.mkdir("./dir_one");

        for (let i = 0; i < 10; i++) {
            const numbers = Array.from({ length: 4 }, () => getRandomNumber());

            await fs.promises.writeFile(`./dir_one/file_${i}.txt`, numbers.join(","));
        }

        const files = await fs.promises.readdir("./dir_one");
        const AllStats = [];
        for (let file of files) {
            const stats = await fs.promises.stat(
                path.join(__dirname, "dir_one", file)
            );

            console.log();

            AllStats.push({
                basename: path.basename(file),
                extname: path.extname(file),
                dirname: path.resolve(file),
                size: file.size,
                birthtime: file.birthtime,
                isFile: (await fs.promises.stat(path.join("./dir_one", file))).isFile(),
                isDirectory: (
                    await fs.promises.stat(path.join("./dir_one", file))
                ).isDirectory(),
            });
        }

        console.log(AllStats);

        await fs.promises.writeFile(
            "./dir_one/summary.json",
            JSON.stringify(AllStats, null, 2)
        );
    } catch (error) {
        console.error(error);
    }
}

createDir();



//import fs from "fs";
// import path from "path";
//
// const getRandomNumber = (max = 100_000_000) => Math.floor(Math.random() * max);
//
// const dirOne = "./dir_one";
//
// function generateFileData() {
//   let content = "";
//   for (let index = 0; index < 4; index++) {
//     content += `${getRandomNumber()}\n`;
//   }
//   return content;
// }
//
// async function getFileStats(filePath) {
//   const fileStats = await fs.promises.stat(filePath);
//   return {
//     basename: path.basename(filePath),
//     extname: path.extname(filePath),
//     dirname: path.dirname(filePath),
//     size: fileStats.size,
//     birthtime: fileStats.birthtime,
//     isFile: fileStats.isFile(),
//     isDirectory: fileStats.isDirectory(),
//   };
// }
//
// async function main() {
//   try {
//     await fs.promises.mkdir(dirOne);
//   } catch {}
//
//   const files = [];
//
//   for (let index = 1; index <= 10; index++) {
//     const filePath = path.join(dirOne, `file_${index}.txt`);
//     const fileContent = generateFileData();
//     await fs.promises.writeFile(filePath, fileContent);
//     files.push(await getFileStats(filePath));
//   }
//
//   fs.promises.writeFile("./responses.json", JSON.stringify(files, null, 2));
// }
//
// main();