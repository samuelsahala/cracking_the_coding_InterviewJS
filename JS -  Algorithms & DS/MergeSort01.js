// TODO: merge function for sort ------- sorted already !
// create empty array take a look at the smallest values in each input arry.
// while there are still values we haven't looked at...
// if the value is the first array is smaller than the value in the second array,
// push the value in the first array into our results and move on the next value in the first array.
// if the value in the first array is larger than the value in the second array, push the value in the second array
// into our results and move on to the next value in the second array.
// once we exhaust one array, push in all remaining values from the other array(its sorted...)

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    }
    if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
//arr1          arr2
//         i            j
//[1, 10, 50], [2, 14, 99, 100]
// [1,]
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
