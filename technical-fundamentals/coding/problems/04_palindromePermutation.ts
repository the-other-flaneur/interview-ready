// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
	let result = true;
	let chars = new Map();
	let aux = str.toLowerCase().replaceAll(' ', '');

	for (let i = 0; i < aux.length; i++) {
		if (chars.has(aux[i])) {
			chars.set(aux[i], chars.get(aux[i]) + 1)
		} else {
			chars.set(aux[i], 1)
		}
	}

	let counter = 0;

	for (const [key, value] of chars) {
  		if (value % 2 != 0) counter++
	}

	result = counter == 1 || counter == 0
	return result;
}
