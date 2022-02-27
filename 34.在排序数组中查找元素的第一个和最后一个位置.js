/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 * 
 * 思路：
 * 二分查找，找到 target 
 * 根据target的下标，前后遍历，找出相同数字的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1]
  if (!nums.length) return res

  let left = 0
  let right = nums.length - 1
  let index = -1

  while (left <= right) {
    const half = left + ((right - left) >> 1)
    // console.log('--', left, right, half)
    if (nums[half] === target) {
      index = half
      break
    } else if (nums[half] > target) {
      right = half - 1
    } else {
      left = half + 1
    }
  }

  if (index === -1) {
    return res
  } else {
    for (let i = index; i < nums.length; i++) {
      if (nums[i] === target) {
        res[1] = i
      } else {
        break
      }
    }

    for (let j = index; j >= 0; j--) {
      if (nums[j] === target) {
        res[0] = j
      } else {
        break
      }
    }
  }

  return res

};
// @lc code=end

const nums = [5, 7, 7, 8, 8, 10], target = 5
const result = searchRange(nums, target)
console.log(result)

