/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 * 思路: 最先想到，广度优先搜索
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  // 根节点入队
  const q = [root];
  // 返回值
  const res = [];
  while (q.length) {
    // 当前层的数量
    let len = q.length;
    // res中放入一个装当前层的空数组
    res.push([]);
    while (len--) {
      // 从队列中，将当前层的元素推入res的尾巴数组中
      const n = q.shift();
      res[res.length - 1].push(n.val);
      n.left && q.push(n.left);
      n.right && q.push(n.right);
    }
  }
  return res;

};
// @lc code=end

