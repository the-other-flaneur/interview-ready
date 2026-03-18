// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {
	
	let n = matrix.length - 1
	let c = Math.floor(matrix.length / 2)
	let k = 0

	while(k < c) {
		
		let i = k
		let j = n

		while (i < n && j > k) {
			let temp = matrix[i][n]
			let temp2 = matrix[n][j]
			let temp3 = matrix[j][k]

			matrix[i][n] = matrix[k][i]; 
			matrix[n][j] = temp;	   
			matrix[j][k] = temp2;	   
			matrix[k][i] = temp3; 	     
			
			i++
			j--
		}
		k++
		n--
	}
	return matrix;
}
