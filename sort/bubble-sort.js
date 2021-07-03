function bubbleSort(arr) {
  let swapped;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      swapped = false;
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log(comparisons);
  return arr;
}

console.log(bubbleSort([2, 50, 13, 421, 1, -43, 42, 10]));
console.log(bubbleSort([8, 1, 2, 3, 4]));
