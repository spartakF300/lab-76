const express = require('express');

const fileDb = require("../fileDb");
const router = express.Router();

router.post('/', (req, res) => {
    if (req.body.message !== '' && req.body.author !== '') {
        fileDb.addMessages(req.body);
        res.send(req.body);
    }else {
        res.status(400).send('Error')
    }

});
router.get('/', (req, res) => {
    if (req.query.datetime) {
        const date = new Date(req.query.datetime);
        if (isNaN(date.getDate())) {
            res.status(400).send('Error')
        } else {
            res.send(fileDb.getMessageByDateTime(date.toISOString()))
        }

    } else {
        res.send(fileDb.getMessages())
    }
});
module.exports = router;