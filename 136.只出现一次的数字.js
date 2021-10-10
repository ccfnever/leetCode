/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // const sortNums = nums.sort((a, b) => a - b)
  // const len = sortNums.length
  // for (let i = 0; i <= (len >> 1); i++) {
  //   const i2 = i * 2
  //   if (sortNums[i2] !== sortNums[i2 + 1]) {
  //     return sortNums[i2]
  //   }
  // }
  // return sortNums[len - 1]

  // 本题使用异或去除重复数字，才是正道
  // 异或位运算，满足以下几点
  // 0 ^ a = a
  // a ^ a = 0
  // a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b
  // 所以只需要全部异或就好
  return nums.reduce((a, b) => {
    return a ^ b
  })
};
// @lc code=end

const nums = [1, 1, 2, 4, 2, 4, 3]
console.log(singleNumber(nums))