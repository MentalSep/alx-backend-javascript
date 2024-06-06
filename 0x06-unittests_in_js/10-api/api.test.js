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

describe('Available payments', function () {
  it('should return an object with credit_cards and paypal', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      }
    });
  });
});

describe('Login', function () {
  it('should return a 200 status code and the welcome message with the provided username', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: 'Betty' }),
    };

    request(options, function (error, response, body) {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    });
  });
});