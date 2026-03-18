// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {

	let rowLength = matrix.length
	let columnLength = matrix[0].length

	let zeros = new Set()

	for (let row = 0; row < rowLength; row++) {
		for (let column = 0; column < columnLength; column++) {
    			if (matrix[row][column] == 0) {
				zeros.add([row, column])	
			}
  		}
	}

	for (const z of zeros) {
		// zero the row
		for (let i = 0; i < rowLength; i++) {
			matrix[z[0]][i] = 0;
		}

		// zero the column
		for (let i = 0; i < columnLength; i++) {
			matrix[i][z[1]] = 0;
		}
	}


	return matrix
}
