const http = require('http');

const message = '1212421  ';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> some sort of sheet</h1>');
    res.write('<p>this is paragraph</p>');
    res.end();
}).listen(3000);