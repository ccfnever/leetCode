/**
 * 输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

  if (matrix.length === 0) return []
  const m = matrix.length
  const n = matrix[0].length

  const rows = {}
  const cols = {}

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true
        cols[j] = true
      }
    }
  }
  Object.keys(rows).forEach(item => {
    matrix[item] = new Array(n).fill(0)
  })

  Object.keys(cols).forEach(item => {
    matrix.forEach(subItem => {
      subItem[item] = 0
    })
  })
  
  return matrix
};

var matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]

console.log(setZeroes(matrix))