/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const result = strs.reduce((a, b) => {
    let str = ''
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        str += b[i]
      } else {
        break
      }
    }
    return str
  })
  return result
};
// @lc code=end

var strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))