const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round down 1.2 and 3.7 to 1 and 4, and return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round down 1.5 and 3.7 to 2 and 4, and return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round down 1 and 3 to 1 and 3, and return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round down 1 and 3.7 to 1 and 4, and return 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
});
