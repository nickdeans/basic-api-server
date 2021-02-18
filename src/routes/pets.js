'use strict';

const express = require('express');
const router = express.Router();

const vaildator = require('../middleware/validator.js');
const { app } = require('../server.js');

app.get('/pets', getPets);
app.get('/pets/:id', vaildator, getPetById);
app.post('/pets', createPet);
app.put('/pets/:id', validator, updatePet);
app.delete('/pets/:id', vaildator, removePet);

function getPets(request, response, next){
    let resObject = pets.read();
    response.json(resObject);
}

function getPetById(request, response, next){
    const id = parseInt(request.params.id);
    let resObject = pets.read(id);
    response.json(resObject);
}

function createPet(request, response, next){
    const petsObject = request.body;
    let resObject = pets.create(petsObject);
    response.json(resObject);
}

function updatePet(request, response, next){
    const id = parseInt(request.params.id);
    const petsObject = request.body;
    let resObject = pets.update(id, petsObject);
    response.json(resObject);
}

function removePet(request, response, next){

}

module.exports = router;