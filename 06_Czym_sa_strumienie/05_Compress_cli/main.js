const program = require("commander");
const fs = require("fs");
const gzipper = require("./Gzipper");

//Ważne jest aby aplikacja przyjmowała trzy argumenty,
// source (-s), target(-t) i action(-a). Na tym rola commandera będzie zakończona

program
    .version('0.0.1')
    .option('-s, --source <source>', 'Specify the source (path of the file')
    .option('-t, --target <target>', 'Specify the target: compressed or decompressed')
    .option('-a, --action <action>', 'Specify the action: compress or decompress')
    .parse(process.argv);

const options = program.opts();


if (options.source) console.log(`Source: ${options.source}`);
if (options.target) console.log(`Target: ${options.target}`);
if (options.action) console.log(`Action: ${options.action}`);


// //walidacja
//sprawdzić, czy użytkownik podał wartości -s oraz -t.

if (!options.source || !options.target) {
    console.log("Prosze podać wartości source i target")
}

// sprawdzić czy ścieżka podana w zmiennej -s wskazuje na plik. Do tego celu należy wykorzystać metodę .fs.existsSync().
// Następnie należy sprawdzić, czy użytkownik wprowadził poprawną nazwę akcji, compress albo decompress.
if (fs.existsSync(options.source)) {
console.log("Plik istnieje, poprawnie podane source");
} else {
    console.log("Plik nie istnieje, błędnie podane source");
}

if (options.action !== 'decompress' && options.action !== 'compress') {
    console.error('Invalid action. Please use either "compress" or "decompress".');
} else {
    console.log('Poprawnie wpisane action:', options.action)
}


gzipper(options.source, options.target, options.action);
