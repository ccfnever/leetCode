/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 思路：
 * 有环，表示可以一直循环下去。可以用快慢指针，
 * slow 每次进一位，fast 每次进两位，如果他们并列，则表示有环，
 * 如果 fast 跑到了 null ，则没有环
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || head.next === null) return false
  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (!fast || !fast.next) return false

    slow = slow.next
    fast = fast.next.next
  }
  return true
};

// jascript 奇葩解法
// 利用 JSON.stringify 对象循环引用
var hasCycle2 = function (head) {
  try {
      JSON.stringify(head)
  } catch{
      return true
  }
  return false
};

// 利用 js 动态特性，追加 tag ，如果遇到有 tag 的，就 true
const hasCycle3 = function(head) {
  while (head) {
    if (head.tag) {
      return true;
    }
    head.tag = true;
    head = head.next;
  }
  return false;
};

// @lc code=end

