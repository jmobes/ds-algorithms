function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch([1, 5, 10, 16, 1000, 32, 7, 2, 14], 20));
console.log(linearSearch([1, 5, 10, 16, 1000, 32, 7, 2, 14], 1));
console.log(linearSearch([1, 5, 10, 16, 1000, 32, 7, 2, 14], 6));
console.log(linearSearch([1, 5, 10, 16, 1000, 32, 7, 2, 14], 14));
console.log(linearSearch([1, 5, 10, 16, 1000, 32, 7, 2, 14], 1000));
