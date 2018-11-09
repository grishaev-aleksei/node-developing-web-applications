const mongoose = require('mongoose');
const mongooseSave = require('./mongooseSave');

mongoose.connect('mongodb://localhost:27017/myproject', {useNewUrlParser: true}).then(
    () => {
        console.log('connected to myproject database');
    }, (err) => {
        console.log(err);
    }
);

const ShoppingListSchema = mongoose.Schema({
    item: String,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

const ShoppingList = mongoose.model('ShoppingList', ShoppingListSchema);

const listItem = new ShoppingList({
    item: 'apples',
    quantity: 40
});

mongooseSave.saveItem(listItem);