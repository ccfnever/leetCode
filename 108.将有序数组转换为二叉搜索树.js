/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 * 思路：要转成 BST , 递归处理，取中间值分割
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  return deep(nums, 0, nums.length - 1)

  function deep(nums, start, end) {
    if (start > end) {
      return null;
    }

    let mid = (start + end) >> 1
    let node = new TreeNode(nums[mid])
    node.left = deep(nums, start, mid - 1)
    node.right = deep(nums, mid + 1, end)

    return node
  }
};
// @lc code=end

