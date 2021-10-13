/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 本题思路：
  // 1. 用 hash 表记录每个字符串出现的次数，最终如果为 1 的，就仅出现一次
  // 2. 由于 hash 表无序，所以还需要再遍历一遍，算出最小值

  const hash = {}
  let noMatch = true
  let minIndex = s.length - 1
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) {
      hash[s[i]] = false
    } else {
      hash[s[i]] = i
    }
  }

  for (let key in hash) {
    if (hash[key] !== false && hash[key] <= minIndex) {
      minIndex = hash[key]
      noMatch = false
    }
  }
  console.log(hash)
  return noMatch ? -1 : minIndex
};
// @lc code=end
const s = "2"
console.log(firstUniqChar(s))
