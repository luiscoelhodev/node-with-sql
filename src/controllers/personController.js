const Person = require('../models/person');

module.exports = {

    async index(req, res) {
        const people = await Person.findAll();

        if(people == '' || people == null) {
            return res.status(200).send({message: `No one was found: the table 'people' is empty! `});
        }

        return res.status(200).send({ people });
    },

    async store(req, res) {

    },

    async update(req, res) {

    },

    async delete(req, res) {

    },

}