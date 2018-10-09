const http = require('http');
const url = require('url');

const address = new URL('http://localhost:3000/node?chapter=2&module=url&module=http');
const address2 = 'http://localhost:3000/node?chapter=2&module=url&module=http';

const urlParams = url.parse(address.href, true);
const urlParams2 = url.parse(address2, true);

const fooBarObj = {foo: 'bar', baz: 42};



http.createServer((req, res) => {
    // res.write(`full address = ${address} \n`);
    // res.write(`urlParams (href) = ${urlParams.query.module} \n\n`);
    // res.write(`query = ${urlParams} \n \n \n`);
    Object.entries(urlParams.query.module).forEach((key, value) => {
        res.write(` query = ${Object.keys(urlParams.query)[1]} has value = ${key}\n`)
    });

    // for (let module in urlParams.query.module) {
    //     let value = urlParams.query.module[0];
    //     res.write(`property 1 amd property value = ${value}\n`);
    // }
    // res.write(`module have values ${urlParams2.query.module} \n \n \n`);
    res.end();
}).listen(3000);

console.log(fooBarObj);
console.log(urlParams.query);
Object.entries(urlParams.query.module).forEach(([key, value]) => {
    console.log(`query = ${Object.keys(urlParams.query)[1]} has value = ${value}`);
    // console.log(typeof key, ' ', typeof value);
});
console.log(urlParams.query);
//19 done

