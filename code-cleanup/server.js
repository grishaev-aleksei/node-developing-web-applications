const http = require('http');
const htmlCode = require('./../htmlCode');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlCode.getHtml());
    res.end();
}).listen(3000);

module.exports = {http};