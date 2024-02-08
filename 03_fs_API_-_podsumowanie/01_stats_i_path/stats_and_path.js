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