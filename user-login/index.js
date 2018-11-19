const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/myproject';

const {User} = require('./models/user');

mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log(`connected to ${url} successfully`)
}, (err) => {
    console.log(err)
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send('home page')
});

app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        email,
        password
    });
    newUser.save().then(() => {
        res.send(newUser)
    }).catch((error) => {
        console.log(error)
    })
});

app.listen(port, () => {
    console.log(`listening on port = ${port}`)
});