//your JS code here. If required.

function firstNonRepeatingChar(str) {
	const charCount = {};
	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
	}
	for(let key in charCount){
		if (charCount[key] === 1) {
			return key;
		}
	}
	return null;
}

let str = prompt("Enter a string");
alert(firstNonRepeatingChar(str));