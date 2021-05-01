'use strict';

//Initial start for express
const express = require('express');

//Pull in the mongo model and instantiate with the foods schema in models
const Clothes = require('../models/clothes-schema');
const GenericCollection = require('../models/data-collection-class');
const clothes = new GenericCollection(Clothes);

// Firing up the express router
const router = express.Router();

// Food Routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getClothing);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothing);
router.delete('/clothes/:id', deleteClothing);

async function getClothes(req, res){
  let allclothes = await clothes.read();
  res.status(200).json(allclothes)
}
async function getClothing(req, res){
  const id = req.params.id;
  let theclothes = await clothes.read(id);
  res.status(200).json(theclothes);

}
async function createClothes(req, res){
  let content = req.body;
  let createdclothing = await clothes.create(content);
  res.status(201).json(createdclothing)
}
async function updateClothing(req, res){
  let id = req.params.id;
  let content = req.body;
  let updatedclothing = await clothes.update(id, content);
  res.status(200).json(updatedclothing);

}
async function deleteClothing(req, res){
  let id = req.params.id;
  let deletedclothing = await clothes.delete(id);
  res.status(200).json(deletedclothing)
}

module.exports = router;