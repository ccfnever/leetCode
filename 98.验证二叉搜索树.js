/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 * 思路: 
 * 根据中序遍历得到的二叉搜索树元素必须是严格递增，
 * 所以只要完成一次中序遍历，且拿当前节点和前续节点做对比，
 * 发现不满足就直接 false
 * 
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
 * @return {boolean}
 */
var isValidBST = function (root) {

  let prev = null
  return inOrder(root, val => {
    if (prev !== null && prev >= val) {
      return false
    } else {
      prev = val
      return true
    }
  })


  function inOrder(tree, cb) {
    if (!tree) return true
    if (!inOrder(tree.left, cb)) return false
    if (!cb(tree.val)) return false
    return inOrder(tree.right, cb)
  }
};

// @lc code=end

