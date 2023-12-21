const findMissingValues = require('../../app')
const {
	allPositive,
	allNegative,
	onePositive,
	oneNegative,
	negativeResult,
	positiveResult,
	noMissingValues,
	zeroAndDouble,
	onlyZero,
	zeroMissingValue,
} = require('../data/main')

describe('Main test', () => {
  test('All values are positive', () => {
       expect(findMissingValues(allPositive)).toBe(4);
  });
  test('One positive value', () => {
       expect(findMissingValues(onePositive)).toBe(-7);
  });
  test('One negative value', () => {
       expect(findMissingValues(oneNegative)).toBe(-8);
  });
  test('All values are negative', () => {
       expect(findMissingValues(allNegative)).toBe(-7);
  });
  test('Positive and negative values: negative', () => {
       expect(findMissingValues(negativeResult)).toBe(-8);
  });
  test('Positive and negative values: positive', () => {
       expect(findMissingValues(positiveResult)).toBe(2);
  });
  test('No missing values', () => {
       expect(findMissingValues(noMissingValues)).toBe('No missing values');
  });
  test('Positive, negative, zero and double values', () => {
       expect(findMissingValues(zeroAndDouble)).toBe(4);
  });
  test('Only zero values', () => {
       expect(findMissingValues(onlyZero)).toBe('No missing values');
  });
  test('Zero as missing value', () => {
       expect(findMissingValues(zeroMissingValue)).toBe(0);
  });
});