const http = require('http');
const url = require('url');

const address = new URL('http://localhost:3000/node?chapter=2&module=url&module=http');
const address2 = 'http://localhost:3000/node?chapter=2&module=url&module=http';

const urlParams = url.parse(address.href, true);
const urlParams2 = url.parse(address2, true);

http.createServer((req, res) => {
    res.write(`full address = ${address} \n`);
    res.write(`urlParams (href) = ${urlParams.query.module} \n\n`);
    res.write(`query = ${urlParams} \n \n \n`);
    // for (let module in urlParams.query) {
    //     let value = urlParams.query[module];
    //     res.write(`property number = 1 amd property value = ${value}\n`);
    // }
    res.write(`property = ${urlParams2.query.module} \n \n \n`);
    res.end();
}).listen(3000);

console.log(urlParams.query.module);
// console.log(address2);
console.log('some texti');

//19 done