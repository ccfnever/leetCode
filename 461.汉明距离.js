/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 * 跟[191]题思路差不多，先异或，然后再求出 1 的位数
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y
  let res = 0

  while (n) {
    n &= n - 1
    res++
  }
  return res
};
// @lc code=end

