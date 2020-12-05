// TODO: define a function
// start looping from with a variable called i and end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i -1 (optimization - from the end and --)
// if arr[j] is greater than arr[j+1], swap those two values!
// return the sorted array
// O(n) not O(n2) - add noSwaps optimization

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(bubbleSort([37, 45, 29, 200, 3, 4, -1, 20, -30]));
