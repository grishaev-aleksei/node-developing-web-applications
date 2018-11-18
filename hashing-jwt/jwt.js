const jwt = require('jsonwebtoken');

const obj = {
    password: 'password123'
};

const token = jwt.sign(obj, 'salted');

const decodeToken = jwt.decode(token, 'salted');

console.log(token);

console.log(decodeToken);