const {mongoose} = require('./../db/mongoose');
const {Ticket} = require('./../api/models/ticket');
const save = require('./../api/controllers/save');

const saveData = (req, res) => {
    const issue = req.body.issue;
    save.saveDoc(issue).then((docIssue) => {
        if (issue !== docIssue) {
            res.status(400).send(docIssue);
        }
        console.log('issue saved successfully');
        res.status(200).redirect('/')
    }).catch((err) => {
        res.status(400).send(err)
    })
};

module.exports = {saveData};