/* TODO: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
*/

function urlify(urlString, trueLen) {
	let spacesLeft = urlString.length - trueLen;
	let strArr = urlString.split('')
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === " " && spacesLeft + i < strArr.length - 1) {
			strArr[i] = '%20';
		}
	}
	return strArr.join("")
}

console.log(urlify("Mr John Smith   ", 13));