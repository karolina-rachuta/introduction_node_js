// import program from 'commander';
// import inquirer from 'inquirer';
// import { newBookPrompt } from './prompt.js';
// import { saveBooks, getBooks } from './booksAPI.js';
// const { prompt } = inquirer;
//
// program.version('1.0.0').description('Our first and awesome books catalog');
//
// program
//   .command('add')
//   .alias('a')
//   .description('adds new book to the catalog')
//   .action(() => {
//     prompt(newBookPrompt).then(({ title, author, date }) => {
//       console.log(title, author, date);
//       // Add your solutions here
//     });
//   });
//
// program
//   .command('get')
//   .alias('g')
//   .description('get book details')
//   .action(() => {
//     prompt([
//       {
//         type: 'list',
//         name: 'selected',
//         message: 'Choose a book',
//         choices: ['book1', 'book2', 'book3'], // change this to display cataloged books
//         // choices: Object.keys(books)
//       },
//     ]).then(({ selected }) => {
//       console.log(selected);
//       // Add your solutions here
//     });
//   });
//
// program.parse(process.argv);

import program from 'commander';
import inquirer from 'inquirer';
import { newBookPrompt } from './prompt.js';
import { saveBooks, getBooks } from './booksAPI.js';
const { prompt } = inquirer;
program.version('1.0.0').description('Our first and awesome books catalog');
program
    .command('add')
    .alias('a')
    .description('adds new book to the catalog')
    .action(async () => {
        prompt(newBookPrompt).then( async ({ title, author, date }) => {
            const newBook = { title, author, date };
            const books = await getBooks();
            books.push(newBook);
            saveBooks(books);
            console.log('New book added successfully.');
            // Add your solutions here
        });
    });
program
    .command('get')
    .alias('g')
    .description('get book details')
    .action(async () => {
        const books = await getBooks();
        const bookChoices = books.map(book => book.title);
        prompt([
            {
                type: 'list',
                name: 'selected',
                message: 'Choose a book',
                choices: bookChoices,
            },
        ]).then(({ selected }) => {
            const selectedBook = books.find(book => book.title === selected);
            console.log('Selected book details:');
            console.log(selectedBook);
            // Add your solutions here
        });
    });
program.parse(process.argv);