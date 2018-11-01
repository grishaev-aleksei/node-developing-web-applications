const express = require('express');
const path = require('path');

const app = express();

const baseFolder = path.join(__dirname + '../..');

app.use(express.static(baseFolder + '/public'));
app.use(express.static(baseFolder + '/public/images'));

app.get('/', (req, res) => {
    res.sendFile(path.join(baseFolder + '/public/index.html'));
});


app.listen(3000, () => {
    console.log('listening on port = 3000 ...');
});