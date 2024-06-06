const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should round down 1.4 and 4.5 to 1 and 5, and return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('sUBTRACT', () => {
    it('should round down 1.4 and 4.5 to 1 and 5, and return -4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('dIVIDE', () => {
    it('should round down 1.4 and 4.5 to 1 and 5, and return 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('invalid operation type', () => {
    it('should throw an error with message "Invalid operation type"', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), {
        message: 'Invalid operation',
      });
    });
  });
});
