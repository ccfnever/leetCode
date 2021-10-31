/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * 典型的动态规划提
 * 也可以用递归+记忆化搜索的解法
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let tmp = []
  return getCompose(n, tmp) 

  function getCompose(n, tmp) {
    if (tmp[n] > 0) return tmp[n]
    if (n === 1) {
      tmp[n] = 1
      return tmp[n]
    }

    if (n === 2) {
      tmp[n] = 2
      return tmp[n]
    }

    tmp[n] = getCompose(n - 1,tmp) + getCompose(n - 2,tmp)
    return tmp[n]
  }
  
};
// @lc code=end

const n = 7
console.log(climbStairs(n))

