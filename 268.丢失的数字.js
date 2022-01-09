/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const map = {}
  for (let i = 0; i <= nums.length; i++) {
    map[i] = 1
  }

  nums.forEach(c => {
    if (map[c]) delete map[c]
  })

  return Object.keys(map)[0]


};
// @lc code=end

console.log(missingNumber([0]))

