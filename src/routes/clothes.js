'use strict';

const express = require('express');
const GenericCollection = require('../models/data-collection-class.js');
const Clothing = require('../models/clothes-schema.js');

const clothes = new GenericCollection(Clothing);

const router = express.Router();

router.get('/clothes', getAllClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// function getAllClothes(req, res) { 
//   let pileOfClothes = clothes.read();
//   res.status(200).json(pileOfClothes)
// }

async function getAllClothes(req, res) { // may have to turn this into a regular function and pass async later 
  let pileOfClothes = await clothes.read();
  res.status(200).json(pileOfClothes)
}
async function getOneClothes(req, res) {
  const id = parseInt(req.params.id); // may need to delete parseInt 
  let myClothes = await clothes.read(id);
  res.status(200).json(myClothes);
}
async function createClothes(req, res) { 
  let content = req.body;
  let newClothes = await clothes.create(content);
  res.status(201).json(newClothes);
}
async function updateClothes(req, res) {
  const id = req.params.id;
  let content = req.body;
  let washedClothes = await clothes.update(id, content);
  res.status(200).json(washedClothes)
}
async function deleteClothes(req, res) {
  const id = req.params.id;
  let trashedClothes = await clothes.delete(id);
  res.status(200).json({trashedClothes});
}

module.exports = router;
