const sha256 = require("crypto-js/sha256");

const message = 'node Js is awesome';

const hashedMessage = sha256(message).toString();

const saltedMessage = sha256(message + 'salted').toString();

console.log(saltedMessage + '\n' + hashedMessage);