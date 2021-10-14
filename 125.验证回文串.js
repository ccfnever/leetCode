/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 * 
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释："amanaplanacanalpanama" 是回文串
 * 
 * 解题思路：
 * 双指针，双向靠拢。如果非合法字母则跳过，
 * 当字符是合法字母，左右指针转小写后相等则共进一位，直到剩余1位或者指针相撞 返回true
 * 不相等则返回 false
 * 

 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const clearS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let left = 0
  let right = clearS.length - 1

  while (left <= right) {
    if (clearS[left] === clearS[right]) {
      left++
      right--
    } else {
      return false
    }

  }
  return true
};
// @lc code=end
const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
