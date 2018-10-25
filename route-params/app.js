const express = require('express');

const app = express();

app.get('/:username/:', (req, res) => {
    res.send(req.params);
});

app.listen(3000, console.log('listening on port = 3000'));