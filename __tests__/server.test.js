'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(sever);

// ============================= Errors

describe('WEB SERVER', () => {
  it('should respond with 404 on a bad route', async () => {
    const response = await request.get('/nope-nothing');
    expect(response.status).toBe(404);
  })
  it('should respond with 404 on a bad method', async () => {
    const response = await request.put('/nope-nothing');
    expect(response.status).toBe(404);
  })
})

// ============================= Food Route test 

describe('FOOD ROUTES'), () => {
  let id;
  it('should respond with 200 on get /foods', async () => {
    const response = await request.get('/foods');
    expect(response.status).toBe(200);
  })
  it('should respond with 201 on post /foods/:id', async () => {
    const response = await request.post('/foods').send({name: 'route testing', type: 'Cucumber'}); // this may need to be ({name: 'testFoodName', color: "testColor" });
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('route testing');
    id = response.body._id;
  })
  it('should respond with 200 on get /foods/:id', async () => {
    const response = await request.get(`/foods/${id}`);
    expect(response.status).toBe(200);
  })
  it('should respond with 200 on put /foods/:id', async () => {
    const response = await request.put(`/foods/${id}`)
    .send({ name: 'test for updated food', color: 'test for updated food'});
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('test for updated food');
  })
  it('should respond with 200 on delete /foods/:id', async () => {
    const response = await request.delete(`/foods/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('test for deleted food');
  })
}

// =========================================== Clothes Route Test

describe('CLOTHES ROUTES'), () => {
  let id;
  it('should respond with 200 on get /clothes', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toBe(200);
  })
  it('should respond with 201 on post /clothes/:id', async () => {
    const response = await request.post('/clothes').send({name: 'route testing', color: 'Choral Sand'});
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('route testing');
    id = response.body._id;
  })
  it('should respond with 200 on get /clothes/:id', async () => {
    const response = await request.get(`/clothes/${id}`);
    expect(response.status).toBe(200);
  })
  it('should respond with 200 on put /clothes/:id', async () => {
    const response = await request.put(`/clothes/${id}`)
    .send({ name: 'test for updated food', color: 'test for updated food'});
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('test for updated food');
  })
  it('should respond with 200 on delete /clothes/:id', async () => {
    const response = await request.delete(`/clothes/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('test for deleted food');
  })
}