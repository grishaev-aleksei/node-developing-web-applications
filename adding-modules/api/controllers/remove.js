const {mongoose} = require('./../../db/mongoose');
const {Ticket} = require('./../models/ticket');

const removeAll = () => {
    return Ticket.deleteMany({}).then((results) => {
        return results
    })
};

module.exports = {removeAll};