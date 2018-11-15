const {mongoose} = require('./../../db/mongoose');
const {Ticket} = require('./../models/ticket');

const all = () => {
    return Ticket.find({}).then((tickets)=>{
        return tickets
    })
};

module.exports = {all};