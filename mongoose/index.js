const mongoose = require('mongoose');
const mongooseSave = require('./mongooseSave');
const mongooseFind = require('./mongooseFind');
const mongooseDelete = require('./mongooseDelete');
const mongooseUpdate = require('./mongooseUpdate');
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
    quantity: 7
});

const obj = {
    item: 'oranges',
    quantity: 22
};

const unsetObj = {
    quantity: ""
};

const incObj = {
    quantity: +2
};

// mongooseSave.saveItem(listItem);
// mongooseFind.findAll();
// mongooseFind.findItem(listItem.item);
// mongooseFind.findById('5be69c4139be7d036a9d5057');
// mongooseDelete.deleteAll();
// mongooseDelete.deleteSingle('cucumbers');
// mongooseDelete.showDeletedItem('5be7c1fd7f8d3c02fe47731b');
// mongooseUpdate.updateSet('apples', 7, obj);
// mongooseUpdate.updateUnset('apples', unsetObj);
// mongooseUpdate.updateInc('cucumbers', incObj);