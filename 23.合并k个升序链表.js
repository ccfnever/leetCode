/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const { length } = lists
  if (!lists) return null
  // let allEmpty = false

  for (let i = length - 1; i >= 0; i--) {
    if (!lists[i]) {
      lists.splice(i, 1)
    }
  }
  if (lists.length === 0) return null
  
  // 创建虚拟头
  let dummy = new ListNode(null)
  let p = dummy
  // 创建 k 个指针数组，并做好标记
  let points = lists

  while (points.length > 1 ) {
    points.sort((a, b) => a.val - b.val)
    p.next = new ListNode(points[0].val)
    p = p.next

    // 指针数组中的min，需要右移一位，如果它的next为空，则要剔除它
    if (points[0].next == null) {
      points.splice(0, 1)
    } else {
      points[0] = points[0].next
    }

  }

  p.next = points[0]

  return dummy.next
};
// @lc code=end

let head1 = new ListNode(1)
head1.next = new ListNode(3)
head1.next.next = new ListNode(5)

let head2 = new ListNode(4)
head2.next = new ListNode(8)
head2.next.next = new ListNode(9)
const data = [
  head1,
  head2
]

const result = mergeKLists(data)

console.log(result)