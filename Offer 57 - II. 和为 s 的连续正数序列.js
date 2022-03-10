/*
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5
*/

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // 使用滑动窗口法
  // 如 target = 9， 连续正整数序列则为：1,2,3,4,5,6,7,8,9
  // 其中连续在 9/2 + 1,也就是 5 之后不可能出现连续相加 = 9 的情况。
  const res = []
  let left = 1
  let right = 2
  if (target === 1) return [1]

  const last = (target >> 1) + 1
  let count = 3

  while (left < last) {
    if (count === target) {
      const length = right - left + 1
      const arr = []
      for(let i = 0;i<length;i++){
        arr.push(left + i)
      }
      res.push(arr)
      count -= left
      left++
    } else if (count < target) {
      right++
      count += right
    } else {
      count -= left
      left++
    }
  }
  return res
};

const target = 9
const result = findContinuousSequence(target)
console.log(result)