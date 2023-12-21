const findMissingValues = (arr) => {
	// Creating a collection of unique values
	const set = new Set(arr)

	// Sorting unique number values
	const uniqueSortArr = Array.from(set).sort((a, b) => Number(a) - Number(b))

	// Creating result variable
	let result = 'No missing values'

	// Checking array length
	if (uniqueSortArr.length > 1) {
			for (let i = 1; i < uniqueSortArr.length; i++) {
				// Calculating the difference between the absolute values of neighboring elements in a sorted array of unique values
				let delta = Math.abs(Number(uniqueSortArr[i])) - Math.abs(Number(uniqueSortArr[i-1]))

				// Checking if a missing value is 0
				if (Math.abs(delta) > 1) {
					return uniqueSortArr[i-1] + 1
				} else if (delta === 0) {
					return 0
				}
			}
			return result
	} else {
		return result
	}
}

module.exports = findMissingValues