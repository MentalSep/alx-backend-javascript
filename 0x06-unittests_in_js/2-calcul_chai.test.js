const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should round down 1.4 and 4.5 to 1 and 5, and return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('sUBTRACT', () => {
    it('should round down 1.4 and 4.5 to 1 and 5, and return -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('dIVIDE', () => {
    it('should round down 1.4 and 4.5 to 1 and 5, and return 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('invalid operation type', () => {
    it('should throw an error with message "Invalid operation type"', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation');
    });
  });
});
