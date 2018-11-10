const ShoppingList = require('./models/shoppingList');

const findAll = () => {
    ShoppingList.find({}).then((items) => {
        console.log(items)
    }, (err) => {
        console.log(err)
    })
};

const findItem = (item) => {
    ShoppingList.find({item}).then((items) => {
        console.log(items)
    }, (err) => {
        console.log(err)
    })
};

const findById = (id) => {
    ShoppingList.findById({
        _id: id
    }).then((item) => {
        console.log(item)
    }, (err) => {
        console.log(err)
    })

};

module.exports.findAll = findAll;
module.exports.findItem = findItem;
module.exports.findById = findById;