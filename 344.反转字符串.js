/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 很简单，双指针头尾互换

  let left = 0
  let right = s.length - 1

  while (left <= right) {
    const tmp = s[right]
    s[right] = s[left]
    s[left] = tmp

    left++
    right--
  }
  return s
};
// @lc code=end

const s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s))