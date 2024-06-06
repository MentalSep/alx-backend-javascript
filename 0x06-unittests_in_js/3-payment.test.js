const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should use the Utils.calculateNumber function with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(spy, 'SUM', 100, 20);
  });
});
