const http = require('http');
const fs = require('fs');

const helloWorld = 'hello world';
const info = 'my name is Aleksei and this is my first app';

http.createServer(function (request, responce) {
    responce.writeHead(200, {contentType:'text:html'});
    responce.write('<h1>'+ helloWorld +'</h1>');
    responce.write('<p>' +info + '</p>');
    responce.end();

}).listen(3000);

fs.writeFile('data.txt', helloWorld + "\n" + info, function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('Data successfully created');
});