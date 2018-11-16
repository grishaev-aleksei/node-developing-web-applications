const {mongoose} = require('./../../db/mongoose');
const {Ticket} = require('./../models/ticket');

const all = () => {
    return Ticket.find({}).then((tickets) => {
        return tickets
    })
};

const one = (id) => {
    return Ticket.findById({_id: id}).then((ticket) => {
        return ticket
    })
};

module.exports = {all, one};