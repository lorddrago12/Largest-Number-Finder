function largestOfAll(arrayOfArrays) {
  const largest = arrayOfArrays.map(subArray => Math.max(...subArray));
  return largest;
}
