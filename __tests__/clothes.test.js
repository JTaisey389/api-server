'use strict';

require('@code-fellows/supergoose');

const Clothing = require('../src/models/clothes-schema');
const GenericCollection = require('../src/models/data-collection-class');
const clothes = new GenericCollection(Clothing);

describe('--Test for Clothes Routes--', () => {
  it('can create a new item of clothes', () => {
    let obj = { size: 'test for clothes', color: 'Choral Sand' };
    let expected = { size: 'test for clothes', color: 'Choral Sand'};

    return clothes.create(obj).then((record) => {
      Object.keys(obj).forEach((item) => {
        expected(record[item].toEqual(expected[item]));
      })
    })
  })
  it('-- Can read a single item of clothes --', () => {
    let obj = { name: 'test for clothes 2', color: 'Choral Sand 2' };
    let expected = { name: 'test for clotes 2', color: 'Choral Sand 2'};

    return clothes.create(obj).then((record) => {
      return clothes.read(record._id).then((item) => {
        console.log('This should test the create', item);
      });
    });
  })
});
