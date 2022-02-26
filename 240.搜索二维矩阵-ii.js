/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 从右上角开始对比，如果大于 target，则指针左移，小于则右移
  if (!matrix.length || !matrix[0].length) return false

  const m = matrix.length
  const n = matrix[0].length

  let pointM = 0
  let pointN = n - 1

  while (pointM < m && pointN >= 0) {
    const current = matrix[pointM][pointN]
    // 大于目标，左移
    if (current > target) {
      pointN--
    // 右移
    } else if (current < target) {
      pointM++
    } else {
      return true
    }
    
  }
  return false

};
// @lc code=end

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const target = 20

const result = searchMatrix(matrix, target)

console.log(result)