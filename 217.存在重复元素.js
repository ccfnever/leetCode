/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 思路：由于题目要求，只要有两个重复，就返回 true，那可以用 hash ，存在重复就返回 ture，
  // 全部结束还有没有，就返回 false
  
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = nums[i]
      console.log("🚀 ~ file: 217.存在重复元素.js ~ line 20 ~ containsDuplicate ~ map", map)
      
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

const nums = [1,2,3,4,1]
console.log(containsDuplicate(nums))