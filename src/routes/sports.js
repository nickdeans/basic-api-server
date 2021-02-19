'use strict';

const express = require('express');
const router = express.Router();
const Sports = require('../models/sports.js');
const sports = new Sports();

const vaildator = require('../middleware/validator.js');

router.get('/sports', getSports);
router.get('/sports/:id', vaildator, getSportsById);
router.post('/sports', createSports);
router.put('/sports/:id', vaildator, updateSports);
router.delete('/sports/:id', vaildator, removeSports);

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
    const id = parseInt(req.params.id);
    let database = sports.destroy(id);
    response.json(database);
}

module.exports = router;