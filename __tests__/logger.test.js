'use strict';

const loggerMiddleware = require('../src/middleware/logger');

describe('-- Test for logger Middleware--', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach (() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  })
  afterEach (() => {
    consoleSpy.mockRestore();
  })
  it('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
  it('properly moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});