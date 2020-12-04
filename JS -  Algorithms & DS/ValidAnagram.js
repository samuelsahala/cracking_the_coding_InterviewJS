// TODO: Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true

function validAnagram(strA, strB) {
  // make sure both length are the same - if not return false
  if (strA.length !== strB.length) {
    return false;
  }
  // map both strA strB to new objects
  let mapA = {};
  let mapB = {};
  for (let ch of strA) {
    if (mapA[ch]) {
      mapA[ch]++;
    } else {
      mapA[ch] = +1;
    }
  }
  for (let ch of strB) {
    if (mapB[ch]) {
      mapB[ch]++;
    } else {
      mapB[ch] = +1;
    }
  }
  //  ex strA{a:1,z:2} , strB{a:3,z:3}
  console.log(mapA);
  console.log(mapB);
  // compare if key:value b >>> on a ,
  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) {
      // if not exists or not equals return false
      return false;
    }
    // end of the loop return true
    return true;
  }
}
