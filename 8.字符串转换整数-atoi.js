/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let r = s.match(/^\s*(\-|\+){0,1}\d+/)
  return r ? Math.max(Math.min(Number(r[0]),Math.pow(2,31)-1),-Math.pow(2,31)) : 0
};
// @lc code=end
const s = "-91283472332"
console.log(myAtoi(s))
