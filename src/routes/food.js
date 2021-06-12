'use strict';

const express = require('express');
const GenericCollection = require('../models/data-collection-class.js');
const Food = require('../models/food-schema.js');

const snackysnak = new GenericCollection(Food);

const router = express.Router();

router.get('/food', getAllFood);
router.get('/food/:id', getOneSnack);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// function getAllFood(req, res) { 
//   let pileOfSnacks = snackysnak.read();
//   res.status(200).json(pileOfSnacks)
// }

async function getAllFood(req, res) { // may have to turn this into a regular function and pass async later 
  let pileOfSnacks = await snackysnak.read();
  res.status(200).json(pileOfSnacks)
}
async function getOneSnack(req, res) {
  const id = parseInt(req.params.id); // may need to delete parseInt 
  let myFood = await snackysnak.read(id);
  res.status(200).json(myFood);
}
async function createFood(req, res) { 
  let content = req.body;
  let newFood = await snackysnak.create(content);
  res.status(201).json(newFood);
}
async function updateFood(req, res) {
  const id = req.params.id;
  let content = req.body;
  let gotGroceries = await snackysnak.update(id, content);
  res.status(200).json(gotGroceries)
}
async function deleteFood(req, res) {
  const id = req.params.id;
  let trashedFood = await snackysnak.delete(id);
  res.status(200).json({trashedFood});
}

module.exports = router;
