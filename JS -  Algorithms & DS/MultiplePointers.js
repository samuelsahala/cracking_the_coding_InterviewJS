// TODO:  Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// Time Complexity - O(n)
// Space Complexity - O(n)

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,5,6,7,12,12,13]) // 7
function countUniqueValues(arr) {
  if (arr.legnth === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 12, 12, 13]));