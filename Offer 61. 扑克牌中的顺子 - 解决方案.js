/**
 
从扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这 5 张牌是不是连续的。

2 ～ 10 为数字本身，A 为 1，J 为 11，Q 为 12，K 为 13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1：


输入: [1,2,3,4,5]
输出: True

示例 2：


输入: [0,0,1,2,5]
输出: True
限制：


数组长度为 5

数组的数取值为 [0, 13]

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {

  // 先排序
  nums.sort((a, b) => a - b)

  let left = 0
  let right = 1
  let kingNum = 0

  while (left <= 3) {
    if (nums[left] === 0) {
      kingNum++
      left++
      right++
      continue
    }

    const diff = nums[right] - nums[left] - 1

    // diff 小于 0 说明有重复数字
    if (diff < 0) return false

    // 消耗掉大小王
    kingNum -= diff

    if (kingNum < 0) return false
    left++
    right++
  }
  return true
};

const nums = [8, 7, 11, 0, 9]
const result = isStraight(nums)
console.log(result)