const allPositive = [10, 6, 3, 5, 2, 8, 9]

const allNegative = [-10, -6, -3, -5, -2, -8, -9]

const onePositive = [-10, -6, -3, 5, -2, -8, -9]

const oneNegative = [10, 6, 3, 5, 2, 8, -9]

const negativeResult = [10, 6, 3, 5, 2, 8, -9]

const positiveResult = [-10, -6, -7, -5, -2, -8, -9, -4, -3, -1, 0, 3, 1]

const noMissingValues = [-10, -6, -7, -5, -2, -8, -9, -4, -3, -1, 0, 3, 2, 1]

const zeroAndDouble = [5, -6, 0, -7, -7, -5, 0, -2, -8, -9, 0, -4, -3, -1, 3, 0, 3, 2, 1, 5]

const onlyZero = [0, 0, 0, 0, 0]

const zeroMissingValue = [-1, -2, 3, 2, 1]

module.exports = {
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
}
