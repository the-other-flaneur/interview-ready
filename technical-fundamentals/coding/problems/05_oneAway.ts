// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
 
	let result = false;

	// if the strings are the same
	if (str1 == str2) result = true;

	// if its one removed or added character away
	if (Math.abs(str1.length - str2.length) == 1) {
		// and the others are the same
		let LStr = str1.length < str2.length ? str2 : str1;
		let SStr = str1.length < str2.length ? str1 : str2;
		
		let slicedStr = '';

		for  (let i = 0; i < SStr.length; i++) {
			if (SStr[i] != LStr[i]) {
				slicedStr = LStr.slice(0, i-1) + LStr.slice(i, LStr.length) 	
			}
		}

		if (slicedStr == '') {
			slicedStr = LStr.slice(SStr.length);
		}

		result = (slicedStr == SStr || SStr + slicedStr == LStr)

	} else { // has equal quantity of characters
		// are all the same but one
		let diff = 0;
		for (let i = 0; i < str1.length; i++) {
			if (str1[i] != str2[i]) diff++;
		}
		result = (diff == 1 || diff == 0)
	}

	return result;
}
