/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const copyNums = [...this.nums]
  for (let i = 0; i < this.nums.length; i++) {
    const index = Math.floor(Math.random() * (i + 1))
    const tmp = copyNums[i]
    copyNums[i] = copyNums[index]
    copyNums[index] = tmp
  }
  return copyNums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end



