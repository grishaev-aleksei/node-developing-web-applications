const mongoose = require('mongoose');
const mongooseSave = require('./mongooseSave');
const mongooseFind = require('./mongooseFind');
const ShoppingList = require('./models/shoppingList');

mongoose.connect('mongodb://localhost:27017/myproject', {useNewUrlParser: true}).then(
    () => {
        console.log('connected to myproject database');
    }, (err) => {
        console.log(err);
    }
);

const listItem = new ShoppingList({
    item: 'apples',
    quantity: 33
});

// mongooseSave.saveItem(listItem);

// mongooseFind.findAll();
// mongooseFind.findItem(listItem.item);
mongooseFind.findById('5be69c4139be7d036a9d5057');