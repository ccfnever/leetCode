/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 * 相当于实现 js 的 indexOf()
 * 思路:
 * 双指针，主串、子串各一个指针
 * 先声明一个 index = 0，做位置存储
 * 子指针对比主指针，如果字符相等，两边都右移
 * 如果不同，子指针归 0，主指针右移，并把下标赋值给 index
 * 如果子指针等于子串 length - 1，表示找到了，返回 index
 * 如果主指针等于它的 length - 1，表示找不到，返回 -1
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0
  if (haystack === '') return -1
  let left = 0
  let right = 0
  let index = 0 // 临时下标

  while (left <= haystack.length) {
    if (right === needle.length) {
      return index
    }
    if (needle[right] === haystack[left]) {
      if (right === 0) {
        index = left
      }

      left++
      right++
    } else {
      if (right !== 0) {
        left = index
        left+= needle.length
        right = 0
      } else {
        left++
      }
    }
  }
  return -1
};
// @lc code=end
// const haystack = "abc", needle = "c"
// const haystack = "abc", needle = "c"
const haystack = "mississippi", needle = "issip"
console.log(strStr(haystack, needle))
