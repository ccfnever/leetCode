/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
  if(n === 0) return false
  // 计算出 3 ** x = n，如果 x 是整数，就 true
  return(Math.log10(n)/Math.log10(3) % 1 === 0)
};
// @lc code=end

