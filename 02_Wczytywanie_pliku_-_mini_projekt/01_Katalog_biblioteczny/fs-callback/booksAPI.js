import fs from 'fs';

export const getBooks = (callback) => {
    fs.readFile('./books.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Błąd odczytu pliku:", err);
            callback(err, null);
            return;
        }

        try {
            const books = JSON.parse(data);
            const values = Object.values(books);
            callback(null, values);
        } catch (parseError) {
            console.error("Błąd parsowania JSON:", parseError);
            callback(parseError, null);
        }
    });
};

export const saveBooks = (books, callback) => {
    // implement this function to save book catalog to books.json
    const jsonData = JSON.stringify(books, null, 2);
    fs.writeFile('./books.json', jsonData, (err) => {
        if(err) {
            console.error("Błąd zapisu do pliku:", err)
            callback(err);
        }
        console.log('Książki zostały zapisane do pliku books.json')
        callback(null);
    })
}

