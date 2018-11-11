const ShoppingList = require('./models/shoppingList');

const deleteAll = () => {
    ShoppingList.deleteMany({}).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err)
    })
};

const deleteItem = (item) => {
    ShoppingList.deleteMany({item}).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err)
    })
};

const deleteSingle = (item) => {
    ShoppingList.deleteOne({item}).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err)
    })
};

const showDeletedItem = (_id) => {
    ShoppingList.findOneAndDelete({_id}).then((results) => {
        console.log(results)
    }, (err) => {
        console.log(err)
    })
};
module.exports = {
    deleteItem,
    deleteAll,
    deleteSingle,
    showDeletedItem
};