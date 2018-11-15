const {mongoose} = require('./../db/mongoose');
const {Ticket} = require('./../api/models/ticket');

const saveData = (req, res) => {
    const newTicket = new Ticket({
        issue: 'computer will not start'
    });
    newTicket.save().then(() => {
        res.status(200).send(newTicket)
    }).catch((err) => {
        res.status(400).send(err)
    });
    console.log('POST route')
};

module.exports = {saveData};