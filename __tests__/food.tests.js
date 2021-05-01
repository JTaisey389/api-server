'use strict';

require('@code-fellows/supergoose');

const Food = require('../src/models/food-schema');
const GenericCollection = require('../src/models/data-collection-class');
const food = new GenericCollection(Food);

describe('--Test for Food Routes--', () => {
  it('can create a new item of food', () => {
    let obj = { name: 'test for food', color: 'Ice Cream' };
    let expected = { name: 'test for food', color: 'Ice Cream'};

    return food.create(obj).then((record) => {
      Object.keys(obj).forEach((item) => {
        expected(record[item].toEqual(expected[item]));
      })
    })
  })
  it('-- Can read a single item of food --', () => {
    let obj = { name: 'test for food 2', color: 'Ice Cream 2' };
    let expected = { name: 'test for food 2', color: 'Ice Cream 2'};

    return food.create(obj).then((record) => {
      return food.read(record._id).then((item) => {
        console.log('This should test the create', item);
      })
    })
  })
})