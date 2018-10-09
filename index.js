const http = require('http');
const fs = require('fs');
const uc = require('upper-case');

const helloWorld = 'hello world';
const info = 'my name is Aleksei and this is my first app';
const upInfo = info.toLocaleUpperCase();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>' + some text + '</h1>');
    res.write('<p>' + upInfo + '</p>');
    res.write('<p>' + uc(info) + '</p>');
    res.end();

}).listen(3000);

fs.writeFile('data.txt', helloWorld + "\n" + info, function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('Data successfully created');
});