function largestAdjacentProduct(arr) {
  return Math.max(...arr.slice(0, -1).map((n, i) => n * arr[i + 1]))
}
console.log(largestAdjacentProduct([3,8,6,1,9,3]));