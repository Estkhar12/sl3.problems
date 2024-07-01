function rotateMatrix90d(matrix) {
  const n = matrix.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([i]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  return result;
}



// function rotateMatrix(matrix) {
//   const n = matrix.length;
//   const rotated = Array.from({ length: n }, () => Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       rotated[j][n - 1 - i] = matrix[i][j];
//     }
//   }

//   return rotated;
// }

// module.exports = { rotateMatrix };





export default rotateMatrix90d;
