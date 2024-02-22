import program from 'commander';
import inquirer from 'inquirer';
import {newBookPrompt} from './prompt.js';
import {saveBooks, getBooks} from './booksAPI.js';

const {prompt} = inquirer;

program.version('1.0.0').description('Our first and awesome books catalog');

program
    .command('add')
    .alias('a')
    .description('adds new book to the catalog')
    .action(() => {
        prompt(newBookPrompt).then(({title, author, date}) => {
            // console.log(title, author, date);
            const newBook = {title, author, date};
            let bookChoices;
            getBooks((error, books) => {
                if (error) {
                    console.error('Błąd pobierania książek:', error);
                    return;
                }
                bookChoices = books.map(book => book.title);
                console.log('Pobrane książki:', books)
                books.push(newBook);
                saveBooks(books, (error) => {
                    if (error) {
                        console.error('Błąd podczas zapisywania książek:', error);
                    } else {
                        console.log('Książki zostały pomyślnie zapisane do pliku.');
                    }
                });
            });

            // Add your solutions here
        });
    });

program
    .command('get')
    .alias('g')
    .description('get book details')
    .action(() => {
        let bookChoices;
        getBooks((error, books) => {
            if (error) {
                console.error('Błąd pobierania książek:', error);
                return;
            }
            bookChoices = books.map(book => book.title);
            // console.log('Pobrane książki:', books);


            prompt([
                {
                    type: 'list',
                    name: 'selected',
                    message: 'Choose a book',
                    choices: bookChoices,
                    // choices: ['book1', 'book2', 'book3'], // change this to display cataloged books
                    // choices: Object.keys(books)
                },
            ]).then(({selected}) => {
                const selectedBook = books.find(book => book.title === selected);
                console.log('Selected book details:');
                console.log(selectedBook);
                // Add your solutions here
            });
        });
    });

program.parse(process.argv);
