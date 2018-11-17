const {mongoose} = require('./../../db/mongoose');
const {Ticket} = require('./../models/ticket');

const updateTicket = (id, issue) => {
    return Ticket.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            issue
        }
    }).then((ticket) => {
        return ticket
    })
};

module.exports = {updateTicket};