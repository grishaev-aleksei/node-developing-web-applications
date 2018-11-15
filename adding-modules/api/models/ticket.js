const {mongoose} = require('./../../db/mongoose');

const TicketSchema = mongoose.Schema({
    issue: {
        type: String,
        require: true
    }, date: {
        type: Date,
        default: Date.now()
    }
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = {Ticket};