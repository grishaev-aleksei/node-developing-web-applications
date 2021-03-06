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

const authenticate = (req, res, next) => {
    const authToken = req.header('x-auth-token');
    User.findAuthToken(authToken).then((user) => {
        if (!user) {
            return Promise.reject()
        }
        req.user = user;
        req.authToken = authToken;
        next();
    }).catch((err) => {
        console.log(err)
    })
};

app.get('/', (req, res) => {
    res.status(200).send('home page')
});

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({
        email,
        password
    });
    user.save().then(() => {
        user.generateAuthToken().then((token) => {
            res.header('x-auth-token', token).send(user)
        })
    }).catch((error) => {
        res.status(400).send(error)
    })
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    User.confirmUserLogin(email, password).then((user) => {
        res.send(user)
    }).catch((err) => {
        res.status(403).send(err)
    });
});

app.get('/me', authenticate, (req, res) => {
    res.send(req.user)

});

app.listen(port, () => {
    console.log(`listening on port = ${port}`)
});