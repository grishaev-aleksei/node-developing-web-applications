const mongoose = require('./../db/mongoose');
const methodOverride = require('method-override');
const ticket = require('./../api/models/ticket');
const post = require('./post');
const get = require('./get');
const del = require('./delete');
const bodyParser = require('body-parser');

const routes = (app) => {

    app.use(methodOverride('_method'));
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/display', post.saveData);

    app.get('/display', get.showAll);

    app.get('/ticket/:id', get.showOne);

    app.delete('/deleteall', del.deleteAll);
};

module.exports = {routes};