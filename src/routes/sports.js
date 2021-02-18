'use strict';

const express = require('express');
const router = express.Router();

const vaildator = require('../middleware/validator.js');
const { app } = require('../server.js');

app.get('/sports', getSports);
app.get('/sports/:id', vaildator, getSportsById);
app.post('/sports', createSports);
app.put('/sports/:id', validator, updateSports);
app.delete('/sports/:id', vaildator, removeSports);

function getSports(request, response, next){
    let resObject = sports.read();
    response.json(resObject);
}

function getSportsById(request, response, next){
    const id = parseInt(request.params.id);
    let resObject = sports.read(id);
    response.json(resObject);
}

function createSports(request, response, next){
    const sportsObject = request.body;
    let resObject = sports.create(sportsObject);
    response.json(resObject);
}

function updateSports(request, response, next){
    const id = parseInt(request.params.id);
    const sportsObject = request.body;
    let resObject = sports.update(id, sportsObject);
    response.json(resObject);
}

function removeSports(request, response, next){

}

module.exports = router;