const express = require('express');
const router = express.Router();

const personController = require('./controllers/personController');

router.get('/', (req, res) => {
    return res.status(200).send({message: `Hello world!`})
})

router.get('/people', personController.index);

module.exports = router;