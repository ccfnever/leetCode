/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 * 思路：可以用遍历和hash表，但用正则更方便
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  const math = s.match(/(IV?X?)|(XL?C?)|(CD?M?)|[VLDM]/g)
  let res = 0
  if (math) {
    math.forEach(c => {
      res += map[c]
    })
  }
  return res
};  
// @lc code=end

const s = 'MCMXCIV'
console.log(romanToInt(s))
// romanToInt(s)