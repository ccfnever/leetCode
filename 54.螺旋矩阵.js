/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ml = matrix[0].length // 列数
  let nl = matrix.length  // 行数

  let m = 0 // 当前列
  let n = 0 // 当前行

  let reverse = false
  const result = []

  while (ml >= 1 && nl >= 1) {
    // 正向
    if (!reverse) {
      for (let i = 0; i < ml; i++) {
        result.push(matrix[n][m])
        if (i < ml - 1) m++
      }
      nl-- // 行数减 1
      n++ // 当前行下移

      for (let j = 0; j < nl; j++) {
        result.push(matrix[n][m])
        if (j < nl - 1) n++
      }

      ml-- // 列数减 1
      m-- // 当前列左移

      reverse = true
    } else {
      
      for (let i = 0; i < ml; i++) {
        result.push(matrix[n][m])
        if (i < ml - 1) m--
      }
      nl--
      n--
      
      for (let j = 0; j < nl; j++) {
        result.push(matrix[n][m])
        if (j < nl - 1) n--
      }
      ml-- // 列数减 1
      m++ // 当前列左移

      reverse = false
    }
  }
  return result
};
// @lc code=end

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const result = spiralOrder(matrix)
console.log(result)