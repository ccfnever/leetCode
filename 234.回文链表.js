/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 * 思路：
 * 双指针，先遍历一次，找到中间点，然后双指针对比值是否相对，
 * 全部相等为 true
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 只有一个 应该也符合回文，毕竟两边都没有
  if (!head.next) return true

  let fast = head
  let slow = head

  // 快针走两步，慢针走1步
  while (fast.next !== null && fast.next.next !== nullt) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 如果fast不为空，说明链表的长度是奇数,则 slow 进一位
  if (fast) {
    slow = slow.next
  }

  slow = reserve(slow)
  fast = head

  while (slow) {
    //然后比较，判断节点值是否相等
    if (fast.val !== slow.val) return false;
    fast = fast.next;
    slow = slow.next;
  }
  return true;

  // 反转链表
  function reserve(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    return prev;
  }



};
// @lc code=end

