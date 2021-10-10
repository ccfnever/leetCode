/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 模拟十进制加1
  const len = digits.length
  let right = len - 1

  while (right >= 0) {
    if (digits[right] < 9) {
      digits[right]++
      break
    } else {
      digits[right] = 0
      if(right === 0) digits.unshift(1)
      right --
    }
  }

  return digits
};
// @lc code=end

var digits = [1,0]
console.log(plusOne(digits))