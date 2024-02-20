import fs from 'fs';
import books from './books.json';

export const getBooks = () => {
  // implement this function to read book catalog from books.json

    fs.readFile(books, (err, data) => {

        const arrayBooks = [...data]
        for(let i = 0; i < arrayBooks.length; i++) {
             return (
                 arrayBooks[i].title)
        }


    });
// data: Contents of the file.
};

export const saveBooks = () => {
    // implement this function to save book catalog to books.json
    fs.writeFile(books, data, (err) => {
        if (err) throw err;
        getBooks();
        console.log('Book has been saved')
        return data
    });
}

