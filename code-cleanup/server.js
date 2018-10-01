const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> some sort of sheet</h1>');
    res.write('<p>this is wwwqwtfqc</p>');
    res.end();
}).listen(3000);

module.exports = {http};