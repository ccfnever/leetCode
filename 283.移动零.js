/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 解题思路
  // 双指针 a b 同向一起遍历，把非 0 元素向前排
  let indexNow = 0;
  let indexNum = 0;
  const m = nums.length;

  while (indexNum < m) {
    if (nums[indexNum] != 0) {
      nums[indexNow++] = nums[indexNum];
    }
    indexNum++;
  }

  for (let i = indexNow; i < m; i++) {
    nums[i] = 0;
  }

  return nums

};
// @lc code=end

const nums = [0, 1, 0, 0, 3, 12]
console.log(moveZeroes(nums))
