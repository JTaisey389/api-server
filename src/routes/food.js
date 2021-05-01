'use strict';

//Initial start for express
const express = require('express');

//Pull in the mongo model and instantiate with the foods schema in models
const Food = require('../models/food-schema');
const GenericCollection = require('../models/data-collection-class');
const foods = new GenericCollection(Food);

// Firing up the express router
const router = express.Router();

// Food Routes
router.get('/food', getfoods);
router.get('/foods/:id', getfood);
router.post('/food', createFood);
router.put('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

async function getfoods(req, res){
  let allfood = await foods.read();
  res.status(200).json(allfood)
}
async function getfood(req, res){
  const id = req.params.id;
  let thefood = await foods.read(id);
  res.status(200).json(thefood);

}
async function createFood(req, res){
  let content = req.body;
  let createdfood = await foods.create(content);
  res.status(201).json(createdfood)
}
async function updateFood(req, res){
  let id = req.params.id;
  let content = req.body;
  let updatedfood = await foods.update(id, content);
  res.status(200).json(updatedfood);

}
async function deleteFood(req, res){
  let id = req.params.id;
  let deletedfood = await foods.delete(id);
  res.status(200).json(deletedfood)
}

module.exports = router;