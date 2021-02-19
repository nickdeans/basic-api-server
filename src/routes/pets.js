'use strict';

const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');
const pets = new Pets();

const vaildator = require('../middleware/validator.js');

router.get('/pets', getPets);
router.get('/pets/:id', vaildator, getPetById);
router.post('/pets', createPet);
router.put('/pets/:id', vaildator, updatePet);
router.delete('/pets/:id', vaildator, removePet);

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
    const id = parseInt(req.params.id);
    let database = pets.destroy(id);
    response.json(database);
}

module.exports = router;