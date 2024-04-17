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

  // Example usage (optional)
//   const major1: MajorCredits = { credits: 3, brand: MajorCreditsBrand };
//   const major2: MajorCredits = { credits: 4, brand: MajorCreditsBrand };
  
//   const totalMajorCredits = sumMajorCredits(major1, major2);
//   console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
//   console.log(major1.brand)
  
//   const minor1: MinorCredits = { credits: 2, brand: MinorCreditsBrand };
//   const minor2: MinorCredits = { credits: 1, brand: MinorCreditsBrand };
  
//   const totalMinorCredits = sumMinorCredits(minor1, minor2);
//   console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
//   console.log(minor2.brand)
