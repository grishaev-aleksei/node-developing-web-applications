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

const deleteOne = (req,res)=>{
    const id = req.params.id;
    remove.removeOne(id).then((result) => {
        if (id !==result.id) {
            res.status(400).send(result)
        }
        res.status(200).redirect('/display')
    }).catch((err) => {
        res.status(400).send(err)
    });
};

module.exports = {deleteAll, deleteOne};