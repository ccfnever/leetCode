/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1：
 * 
 * 输入：[3,2,3]
 * 输出：3
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (!nums.length) return []

  const hash = {}
  let max = 0
  let maxItem = 0

  nums.forEach(c => {
    if (!hash[c]) {
      hash[c] = 1
    } else {
      hash[c]++

    }
    if (max < hash[c]) {
      max = hash[c]
      maxItem = c
    }
  })

  return maxItem
};

// 摩尔投票法，效率更高
var majorityElement2 = function (nums) {
  let count = 0;
  let candidate;
  for (let a of nums) {
    if (count == 0) candidate = a;
    count += candidate == a ? 1 : -1;
  }
  return candidate;
};

// @lc code=end

const nums = [1]
const result = majorityElement(nums)
console.log(result)