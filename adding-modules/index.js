const express = require('express');
const {mongoose} = require('./db/mongoose');
const {routes} = require('./routes/index');

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
    console.log('listening on port = 3000')
});

module.exports = {app};