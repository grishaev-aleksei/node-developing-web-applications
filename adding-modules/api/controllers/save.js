const {mongoose} = require('./../../db/mongoose');
const {Ticket} = require('./../models/ticket');

const saveDoc = (issue) => {
    const newTicket = new Ticket({
        issue
    });
    return newTicket.save().then((ticket) => {
        return ticket.issue
    })
};

module.exports = {saveDoc};

