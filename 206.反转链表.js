/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 思路：
 * 解法1：
 * 用一个数组存下链表，再从后边循环，形成一个链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  // let curr = head;


  // while (curr) {
  //     const next = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = next;
  // }
  while (head) {
    [head.next, prev, head] = [prev, head, head.next]
  }

  return prev;

};
// @lc code=end

// 递归方法
// 思路: 
// 自递归无法存储推进状态所以无法尾递归，不断将 next 放入递归方法反转链表，
// 结果.next = 当前节点. （Tip: 记得推进结果直到 next.next 为空）

var reverseList = function (head) {

  if (!head || !head.next) return head;
  let reverseHead = reverseList(head.next);
  head.next = null
  head.next.next = head
  return reverseHead

};