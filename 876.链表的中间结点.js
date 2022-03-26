/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function (head) {
  // 快慢指针完事儿
  let slow = head
  let fast = head
  
  if (!slow.next) return slow

  while (fast) {
    // 奇数
    if (!fast.next) break
    // 偶数
    if (!fast.next.next) {
      slow = slow.next
      break
    }
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};
// @lc code=end
const head = [1, 2, 3, 4, 5, 6, 7]
