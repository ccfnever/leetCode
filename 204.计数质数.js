/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 * 可以使用埃氏筛选法
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 0 和 1 都不是质数
  if (n <= 1) return 0
  // 先假定所有数都是质数
  let nums = new Array(n).fill(1)
  let count = 0

  for (let i = 2; i < n; i++) {

    // 数组里未被改成 0，即筛选存留的数
    if (nums[i]) {
      count++
      // 把所有 i 的倍数都设置为 0 
      for (let j = i * i; j < n; j += i) {
        nums[j] = 0
      }
    }
  }
  return count
};
// @lc code=end

