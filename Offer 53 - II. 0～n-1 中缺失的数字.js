/**
 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 */

/**
示例 1:

输入: [0,1,3]
输出: 2
示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8

限制：

1 <= 数组长度 <= 10000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 使用二分查找

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = (left + right) >> 1
    // 由于数字和下标是一致的, 所以当 mid 的值等于 num[mid] 说明 left 区间都没有缺失
    // 那么就抛弃 left，让 left = mid + 1
    if (mid === nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
};

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 9]
const result = missingNumber(nums)
console.log(result)
