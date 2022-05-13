const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();
const dbConnect = require('./database');

app.use(express.json());

app.listen(3333, () => {
    console.log("Server running on port 3333.")
})

app.use(routes);
