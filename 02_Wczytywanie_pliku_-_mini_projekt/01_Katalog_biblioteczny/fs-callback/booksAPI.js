import fs from 'fs';

export const getBooks = () => {
  // implement this function to read book catalog from books.json

    fs.readFile('books.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

    });
// data: Contents of the file.
};

export const saveBooks = () => {
    // implement this function to save book catalog to books.json
    fs.writeFile('books.json', data, (err) => {
        if (err) throw err;
        getBooks();
        console.log('Book has been saved')
    });
}

