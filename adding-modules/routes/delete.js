const {mongoose} = require('./../db/mongoose');
const {Ticket} = require('./../api/models/ticket');
const remove = require('../api/controllers/remove');

const deleteAll = (req, res) => {
    remove.removeAll().then((results) => {
        if (results.ok !== 1) {
            res.status(400).send(results)
        }
        res.status(200).redirect('/display')
    }).catch((err) => {
        res.status(400).send(err)
    });
};

module.exports = {deleteAll};