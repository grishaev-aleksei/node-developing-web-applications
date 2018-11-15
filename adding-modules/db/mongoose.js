const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/myproject';

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log('connected to myproject collection')
}, (err) => {
    console.log(err)
});

module.exports = {mongoose};