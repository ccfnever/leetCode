/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 思路：经典的动态规划题
 * 确定状态
 * 找到转移公式
 * 确定初始条件以及边界条件
 * 计算结果
 * 
 * 
 * 1、当天能获得的最大利润 = 今天之前的股价最低的那天买入，今天卖出
 * 2、记录之前的最低股价，记录最大利润
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0

  // 创建两个变量，一个是历史最低价，一个是卖出最大利润
  let minPrices = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    minPrices = prices[i] > minPrices ? minPrices : prices[i]
    maxProfit = (prices[i] - minPrices) > maxProfit ? (prices[i] - minPrices) : maxProfit
  }

  return maxProfit
};
// @lc code=end
const prices = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))
