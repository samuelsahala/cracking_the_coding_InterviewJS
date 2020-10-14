// TODO:  Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures ? 

function isUnique(str) {
	// hash str character
	let obj = {}
	for (let i = 0; i < str.length; i++) {
		if (str[i] in obj) {
			obj[str[i]] = 0;
			return false
		} else {
			obj[str[i]] = 1;
		}
	}
	return true;
}
console.log(isUnique('shmuel'));
console.log(isUnique('shmuell'));
console.log(isUnique('sh@mu@el'));