/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  const result = []
  // 先排序
  const sortIntervals = intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < sortIntervals.length; i++) {
    if (i === 0) {
      result.push(sortIntervals[i])
      continue;
    }
    let left = sortIntervals[i][0]
    let right = sortIntervals[i][1]

    const index = result.length - 1

    // 有重叠
    if (left <= result[index][1]) {
      result[index][1] = right >= result[index][1] ? right : result[index][1]
    } else {
      result.push(sortIntervals[i])
    }
  }

  return result
};

var intervals = [[1,4],[4,5]]

console.log(merge(intervals))
// @lc code=end

