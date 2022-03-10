/**
 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
  // 先用二分查找找到 target 下标，确定right位置
  let left = 0
  let right = nums.length - 1
  let mid = 0
  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      right = mid - 1
      break
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  // 第二次循环，继续用双指针依次
  left = 0
  while (left <= right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      return [nums[left], nums[right]]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return []
};

const nums = [10, 26, 30, 31, 47, 60], target = 40
const result = twoSum(nums, target)
console.log(result)
