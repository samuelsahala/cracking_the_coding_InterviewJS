// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }
function factorial(num) {
  //base case
  if (num === 1) return 1;
  //diff input
  return num * factorial(num - 1);
}
console.log(factorial(4));
