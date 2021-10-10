/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 1. 先给两个数组排序
  // 2. 然后用同向双指针，逐个对比两个数组
  // 3. 如果 a < b, a 指针右移，如果 a > b, b 指针右移
  //    如果 a === b, push 到结果数组，然后 ab 指针都右移

  const result = []
  const sortNums1 = nums1.sort((a, b) => a - b)
  const sortNums2 = nums2.sort((a, b) => a - b)
  // console.log(sortNums1)
  // console.log(sortNums2)
  // 双指针
  let p1 = 0
  let p2 = 0

  const length1 = nums1.length
  const length2 = nums2.length

  while (p1 < length1 && p2 < length2) {
    if (sortNums1[p1] < sortNums2[p2]) {
      p1++
      // console.log('p1右移到',p1)
    } else if (sortNums1[p1] > sortNums2[p2]) {
      p2++
      // console.log('p2右移到',p2)
    } else {
      // console.log('p1',p1)
      // console.log('p2',p2)
      // console.log('抵消')
      result.push(sortNums1[p1])
      p1++
      p2++
      // console.log('p1右移到',p1)
      // console.log('p2右移到',p2)
    }
  }

  return result
};

/* 
使用map解决
还可以使用map来解决，具体操作如下
遍历nums1中的所有元素，把它存放到map中，其中key就是nums1中的元素，value就是这个元素在数组nums1中出现的次数。
遍历nums2中的所有元素，查看map中是否包含nums2的元素，如果包含，就把当前值加入到集合list中，然后对应的value要减1。

*/
var intersect2 = function (nums1, nums2) {
  const result = []
  const map = {}
  nums1.forEach(item => {
    if (map[item] === undefined) {
      map[item] = 1
    } else {
      map[item]++
    }
  });

  nums2.forEach(item => {
    if (map[item] !== undefined && map[item] > 0) {
      result.push(item)
      map[item]--
    }
  })
  return result
};

// @lc code=end

var nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2))
console.log(intersect2(nums1, nums2))