const mongoose = require('./../db/mongoose');
const ticket = require('./../api/models/ticket');
const post = require('./post');

const routes = (app) => {
    app.post('/', post.saveData);
};

module.exports = {routes};