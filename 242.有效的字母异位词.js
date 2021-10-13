/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 * 
 * 解题思路：
 * 用一个 hash 表记录第一个字符串每个字符出现次数，再用第二个字符串遍历减去，
 * 如果最后次数为0，则是有效字母异位词
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = {}
  for (let i in s) {
    map[s[i]] = map[s[i]] === undefined ? 1 : map[s[i]] + 1
  }
  
  for (let j in t) {
    if (map[t[j]]) {
      map[t[j]]--
    } else {
      return false
    }
  }
  
  return Object.values(map).filter(c => c > 0).length === 0
};
// @lc code=end
const s = "anagram", t = "ang1ram"
console.log(isAnagram(s, t))