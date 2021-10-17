/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 * 
 * 思路：
 * 因为是升序的，可以创建个新的链表，
 * 使用双指针左到右分别对比大小，小的排到新的链表里，直到两个原始链表都为空
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  // 虚拟头节点
  let dummy = new ListNode();
  let p = dummy;
  // 两个链表都有值的情况
  while (l1 && l2) {
    // console.log(dummy,p)
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    // p 指针不断前进
    p = p.next;
  }
  p.next = l1 == null ? l2 : l1;
  return dummy.next;
};
// @lc code=end

