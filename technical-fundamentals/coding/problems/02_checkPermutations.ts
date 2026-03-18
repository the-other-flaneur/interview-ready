// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
	
	let result = true;

	if (s1.length != s2.length) {
		result = false;
	} else {
		let unique = new Set();
		
		for (let i = 0; i < s1.length; i++) {
			if (!unique.has(s1[i])) unique.add(s1[i])
		}

		for (let i = 0; i < s2.length; i++) {
			if (!unique.has(s2[i])) result = false;
		}
	}

	return result;
}
