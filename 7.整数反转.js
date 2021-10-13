/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 转成字符串数组，再把前面的数字全部push到最后，改动的变成 0
  let arr = x.toString().split('')
  let left = arr[0] === '-' ? 1 : 0
  let right = arr.length - 1
  let result = 0
  while (left <= right) {
    arr.push(arr[right])
    arr[right] = '0'
    right--
  }
  result = Number(arr.join(''))
  if (Math.pow(2, 31) - 1 < result || result < Math.pow(-2, 31)) return 0
  return result
};
// @lc code=end

const x = -1534236469
console.log(reverse(x))