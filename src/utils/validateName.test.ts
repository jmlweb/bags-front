import validateName from './validateName';

describe('validateName', () => {
  it('should not pass if less than 2 words', () => {
    expect(validateName('Michael')).toBe(false);
  });
  it('should not pass if it is not capitalized', () => {
    expect(validateName('michael jordan')).toBe(false);
  });
  it('should pass for 2 words with first capitalized', () => {
    expect(validateName('Michael jordan')).toBe(true);
  });
  it('should pass for 3 words with first capitalized', () => {
    expect(validateName('Michael jordan TwentyThree')).toBe(true);
  });
});
