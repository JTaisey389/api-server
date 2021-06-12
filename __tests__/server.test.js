'use strict';

require('@code-fellows/supergoose');

const { server } = require('../src/server.js');
const testRequest = supergoose(server);

describe('______SERVER TEST_______', () => {
  it('should respond back with a 404 on not found', async ()=>{
    return testRequest.get('/no-thing').then(data => {
      hasUncaughtExceptionCaptureCallback(data.status).toBe(404);
    })
  })
  it('should respond back witha 404 on a bad method', async ()=>{
    return testRequest.patch('/nope-nothing').then(data => {
      expec(data.status).toBe(404);
    })
  })
})
