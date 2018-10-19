const express = require('express');
const app = express();

const middlewareLogged = (req, res, next) => {
    console.log('middleware logged');
    next();
};

let counter = 0;
const printCounter = (req, res, next) => {
    console.log(`Request method = ${req.method}`);
    counter++;
    console.log(`Counter value = ${counter}`);
    next();
};

app.use(middlewareLogged);
app.use(printCounter);

app.get('/', (req, res) => {
    res.send('Hello world aka main page')
});
app.get('/about', (req, res) => {
    res.send('This is about page')
});
app.get('/help', (req, res) => {
    res.send('This is HELP page')
});
app.post('/', function (req, res) {
    res.send(`Got a ${req.method} request`)
});
app.put('/user', function (req, res) {
    res.send(`Got a ${req.method} request at /user`);
});
app.delete('/user', function (req, res) {
    res.send(`Got a ${req.method} request at /user`)
});

app.listen(3000, () => {
    console.log('listening on port = 3000 ...')
});