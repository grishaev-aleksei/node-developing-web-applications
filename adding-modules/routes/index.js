const mongoose = require('./../db/mongoose');
const ticket = require('./../api/models/ticket');
const post = require('./post');
const get = require('./get');
const bodyParser = require('body-parser');

const routes = (app) => {
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/', post.saveData);

    app.get('/display', get.showAll);
};

module.exports = {routes};