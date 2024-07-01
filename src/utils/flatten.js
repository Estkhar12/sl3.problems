const flattenArray = (arr) => {
  const result = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      const flatenSubArray = flattenArray(item);
      acc = acc.concat(flatenSubArray);
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return result;
};
export default flattenArray;


// function flattenArray(arr, acc) {
//   // Initialize an empty array to hold the flattened result
//   let result = [];
//   // Iterate over each element in the input array
//   arr.forEach((item) => {
//     // If the element is an array, recursively flatten it and concatenate the result
//     if (Array.isArray(item)) {
//       acc = acc.concat(flattenArray(item));
//     } else {
//       // If the element is not an array, add it directly to the result
//       result.push(item);
//     }
//     return acc;
//   }, []);
//   return result;
// }

// Example usage:
// let nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
// let flatArray = flattenArray(nestedArray);
// console.log(flatArray);

// export default flattenArray;

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 2],
// ];
// console.log(arr);

// const newArr = arr.flatMap((subarray) => subarray.map((item) => item));
// console.log(newArr);

// const newArr = arr.flat(3);
// console.log(newArr);

