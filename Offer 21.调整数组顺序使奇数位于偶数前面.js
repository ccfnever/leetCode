/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * 示例：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  if(nums.length <= 1) return nums
  // 双指针法
  let left = 0
  let right = nums.length -1 

  while(left < right){
      const isLeftOdd = nums[left] & 1 !==0
      const isRightOdd = nums[right] & 1 !==0

      // 左奇右偶，不交换，都移动
      if(isLeftOdd && !isRightOdd){
          left ++
          right --
      }

      // 左偶右奇，交换，都移动
      if(!isLeftOdd && isRightOdd){
          const tmp = nums[left]
          nums[left] = nums[right]
          nums[right] = tmp
          left ++
          right --
      }
      //左奇右奇, 左针右移
      if(isLeftOdd && isRightOdd){
          left ++
      }
      //左偶右偶，右针左移
      if(!isLeftOdd && !isRightOdd){
          right --
      }

  }

  return nums

};