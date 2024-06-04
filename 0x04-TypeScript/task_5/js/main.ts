interface MajorCredits {
  credits: number;
  brand: typeof MajorCreditsBrand;
}

const MajorCreditsBrand: unique symbol = Symbol("MajorCredits");

interface MinorCredits {
  credits: number;
  brand: typeof MinorCreditsBrand;
}

const MinorCreditsBrand: unique symbol = Symbol("MinorCredits");

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: MajorCreditsBrand,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: MinorCreditsBrand,
  };
}
