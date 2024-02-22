// #!/usr/bin/node
//
// const fs = require("fs");
// const filename = process.argv[2];
//
// if (!filename) {
//     console.error("Please provide a filename");
//     process.exit(1);
// }
//
// process.stdin.on("data", async (chunk) => {
//     console.log("chunk:", chunk);
//
//     console.log(process.argv)
//
//     const string = chunk.toString();
//
//     if (string.includes("Coderslab")) {
//         process.exit(0);
//     }
//
//     await fs.promises.appendFile(filename, chunk.toString(), "utf-8");
// });