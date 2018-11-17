const {mongoose} = require('./../../db/mongoose');
const {Ticket} = require('./../models/ticket');

const removeAll = () => {
    return Ticket.deleteMany({}).then((results) => {
        return results
    })
};

const removeOne = (id) => {
    return Ticket.findOneAndDelete({_id: id}).then((result) => {
        return result
    })
};

module.exports = {removeAll, removeOne};