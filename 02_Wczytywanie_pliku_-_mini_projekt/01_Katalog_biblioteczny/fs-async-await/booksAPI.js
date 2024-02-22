// export const getBooks = () => {
//   // implement this function to read book catalog from books.json
// };
//
// export const saveBooks = () => {
//   // implement this function to save book catalog to books.json
// };


import fs from 'fs';
export const  getBooks = async () => {
    // implement this function to read book catalog from books.json
    try {
        const booksData = fs.readFileSync('books.json', 'utf8');
        let dataJson = JSON.parse(booksData)
        return Object.values(dataJson);
    } catch (error) {
        console.error('Error reading books data:', error);
        return [];
    }
};
export const saveBooks = (books) => {
    try {
        const booksJSON = JSON.stringify(books, null, 2);
        fs.writeFileSync('books.json', booksJSON);
        console.log('Books data saved successfully.');
    } catch (error) {
        console.error('Error saving books data:', error);
    }
    // implement this function to save book catalog to books.json
};