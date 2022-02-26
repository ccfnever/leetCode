/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 * 思路：
 * 旋转，就是把数组想象成队列，旋转一次就是把队尾插到队头
 * 当旋转的次数等于数组length的倍数，相当于没转，那最小值就是 arr[0]
 * 当旋转的次数不等于数组length的倍数，那最小值肯定不在第一位，可以遍历数组
 * 如果arr[a]<arr[a+1],则arr[a+1] 就是最小数
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const min = nums[0]
  const last = nums.length - 1

  for (let i = 0; i < last; i++) {
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1]
    }
  }
  return min
};
// @lc code=end

const nums = [2, 2, 2, 0, 1]
const result = findMin(nums)
console.log(result)