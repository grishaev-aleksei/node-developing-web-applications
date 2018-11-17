const update = require('./../api/controllers/update');

const updateData = (req, res) => {
    const id = req.params.id;
    const issue = req.body.issue;

    update.updateTicket(id, issue).then((ticket) => {
        res.status(200).redirect(`/ticket/${id}`)
    }).catch((err) => {
        res.status(400).redirect(`/ticket/${id}`)
    })
};

module.exports = {updateData};