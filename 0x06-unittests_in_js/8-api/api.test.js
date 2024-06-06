const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('should return a 200 status code', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('should return the correct response', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});