//TODO: selection sort
// store the first element as the smallest value you've seen so far
// comapre this item to the next item in the array until you find a smaller number.
// if a smaller number is found, designate that smaller number to be the "new min" and continue util the end of the array.
// if the "new min" is not the value(index) you initially began with, swap the two values.
// repate this with the next element until the array is sorted.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(selectionSort([1, 3, 10, -23, 5, 90, 100]));
