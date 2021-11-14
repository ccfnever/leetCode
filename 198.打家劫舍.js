/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }
  return dp[nums.length - 1]
};
// @lc code=end

const nums = [2, 7, 9, 3, 1]
console.log(rob(nums))

