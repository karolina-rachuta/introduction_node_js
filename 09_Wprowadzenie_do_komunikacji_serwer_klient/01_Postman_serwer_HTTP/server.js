const http = require('http')
const fs = require('fs')

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/user') {
        res.end('Server received a GET request to path /user')
    }
    if (req.method === 'GET') {
        res.end('Server received a GET request')
    }
    if (req.method === 'POST') {
        res.end('Server received a POST request')
    }
    if (req.method === 'PUT') {
        res.end('Server received a PUT request')
    }
    if (req.method === 'PATCH') {
        res.end('Server received a PATCH request')
    }

    let str = "";
    if (req.method === 'POST' && req.url === "/file") {
        req.on("data", (chunk) => {
            console.log("chunk:", chunk);
            str += chunk.toString();
        });

        req.on("end", () => {
            fs.promises.writeFile("./output.txt", str);
        });

        
    }

})
server.listen(8080, () => {
    console.log('Listening on port 8080')
})
