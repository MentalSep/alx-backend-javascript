const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let spy; let
    stub;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
    stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
  });

  afterEach(() => {
    spy.restore();
    stub.restore();
  });

  it('should use the Utils.calculateNumber function with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(spy, 'The total is: 10');
  });
});
