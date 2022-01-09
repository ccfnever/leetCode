/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]]
  let start = 2
  while (start <= numRows) {
    const currentLv = []
    const prevLe = res[res.length - 1]
    for (let j = 0; j < start; j++) {
      const val_left = prevLe[j - 1] || 0
      const val_right = prevLe[j] || 0
      currentLv.push(val_left + val_right)
    }
    res.push(currentLv)
    start++
  }

  return res
};
// @lc code=end

console.log(generate(5))