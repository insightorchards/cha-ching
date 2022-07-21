const request = require('supertest');
const assert = require('assert');
const app = require('../app');

request(app)
  .get('/')
  .expect('Hello World!')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });