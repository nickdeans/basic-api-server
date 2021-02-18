'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const fourHundred = require('./error-handlers/404.js');

const petsRouter = require('./routes/clothes.js');
const sportsRouter = require('./routes/pets.js');

app.use(express.json());
app.use(logger);
app.use(petsRouter);
app.use(sportsRouter);

app.use(fourHundred);

module.exports = {
    app: app,
    start: (port) => {
        app.listen(port, () => console.log('App s listening on port :: ' + port))
    }
}