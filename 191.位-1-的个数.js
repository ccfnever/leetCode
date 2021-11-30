/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *思路及解法

观察这个运算：n~\&~(n - 1)n & (n−1)，其运算结果恰为把 nn 的二进制位中的最低位的 11 变为 00 之后的结果。

如：6~\&~(6-1) = 4, 6 = (110)_2, 4 = (100)_26 & (6−1)=4,6=(110)2  ,4=(100)2
​
，运算结果 44 即为把 66 的二进制位中的最低位的 11 变为 00 之后的结果。

这样我们可以利用这个位运算的性质加速我们的检查过程，在实际代码中，我们不断让当前的 nn 与 n - 1n−1 做与运算，直到 nn 变为 00 即可。因为每次运算会使得 nn 的最低位的 11 被翻转，因此运算次数就等于 nn 的二进制位中 11 的个数。

 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;

};
// @lc code=end

