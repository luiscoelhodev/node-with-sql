const express = require('express');
const app = express();

app.use(express.json());

app.listen(3333, () => {
    console.log("Server running on port 3333.")
})

app.get('/', (req, res) => {
    return res.status(200).send({message: `Hello world!`})
})