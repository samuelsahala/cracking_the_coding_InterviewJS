// TODO: Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

// n - (k-n)
function isPermutation(strA, strB) {
	if (strA.length !== strB.length) {
		return false;
	} else {
		let a = _sortStringMethod(strA);
		let b = _sortStringMethod(strB);
		return a === b;
	};
};

function _sortStringMethod(str) {
	return str.toLowerCase().split('').sort().join('')
}

console.log(isPermutation("abc", "cba"));