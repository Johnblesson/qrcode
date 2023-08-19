const http = require('http');
const fs = require('fs');

// Creating a variable (hostname, port)
const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('main.html', (err, html) => {
    if(err){
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    
    server.listen(port, hostname, () => {
        console.log(`Server started on port ${port}`)
    });
    
});