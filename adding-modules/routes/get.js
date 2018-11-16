const {mongoose} = require('./../db/mongoose');
const {Ticket} = require('./../api/models/ticket');
const find = require('./../api/controllers/find');

const showAll = (req, res) => {
    find.all().then((tickets) => {
        res.render('display.hbs', {
            data: tickets
        })
    }).catch((err) => {
        res.status(400).send(err);
    });

};

const showOne = (req, res) => {
    const id = req.params.id;
    find.one(id).then((ticket) => {
        res.render('ticket.hbs', {
            data: ticket
        })
    }).catch((err) => {
        res.status(400).send(err);
    })
};

module.exports = {showAll, showOne};