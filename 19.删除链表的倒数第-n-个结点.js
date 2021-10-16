/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 * 
 * 思路：
 * 1. 当遇到特定位置的节点处理时，可以用快慢指针
 * 2. 删除节点，只需要找到目标节点的上一个，并把目标节点的 val 和 next 赋值给它
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 当是空链表的情况下
  if (!head) return null;

  let result = new ListNode(0, head)
  let fast = result
  let slow = result

  // 快指针前进 n 位
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // 遍历链表，同时右移，知道快指针到头
  while (fast) {
    fast = fast.next;
    slow = slow.next
  };

  // 删除慢指针后一位节点
  slow.next = slow.next.next;
  return result.next;

};
// @lc code=end
// a -> b -> c -> d
