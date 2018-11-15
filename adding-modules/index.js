const express = require('express');
const hbs = require('hbs');
const path = require('path');
const {mongoose} = require('./db/mongoose');
const {routes} = require('./routes/index');

const app = express();
const port = 3000;

app.set('view engine', hbs);
app.set('views', path.join(__dirname, '/api/views'));

hbs.registerHelper('formatDate', (date) => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
});
routes(app);

app.listen(port, () => {
    console.log(`listening on port = ${port}`)
});

module.exports = {app};