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

describe('Cart page', function () {
  it('should return a 200 status code when :id is a number', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('should return a 404 status code when :id is not a number', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });

  it('should return the correct response when :id is a number', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    });
  });
});