import program from 'commander';
import inquirer from 'inquirer';
import { newBookPrompt } from './prompt.js';
import { saveBooks, getBooks } from './booksAPI.js';
const { prompt } = inquirer;
import {books as books} from './books.json';

program.version('1.0.0').description('Our first and awesome books catalog');

program
    .command('add')
    .alias('a')
    .description('adds a new book to the catalog')
    .action(() => {
        prompt(newBookPrompt).then(({ title, author, date }) => {
            console.log(title, author, date);
            getBooks().then((books) => {
                books[title] = { title, author, date };
                saveBooks(books).then(() => {
                    console.log('Book added successfully!');
                }).catch((error) => {
                    console.error('Error saving books:', error);
                });
            }).catch((error) => {
                console.error('Error getting books:', error);
            });
        });
    });

program
    .command('get')
    .alias('g')
    .description('get book details')
    .action(() => {
        prompt([
            {
                type: 'list',
                name: 'selected',
                message: 'Choose a book',
                choices: Object.keys(books),
                // change this to display cataloged books
                // choices: Object.keys(books)
            },
        ]).then(({ selected }) => {
            console.log(selected);
            // Add your solutions here
        });
    });

program.parse(process.argv);

