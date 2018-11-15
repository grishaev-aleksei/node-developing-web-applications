const mongoose = require('./../db/mongoose');
const ticket = require('./../api/models/ticket');
const post = require('./post');
const bodyParser = require('body-parser');

const routes = (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/', post.saveData);
};

module.exports = {routes};