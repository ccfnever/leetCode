/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 * 
 * 简单说，就是用递归返回对上一个结果的描述，
 * 针对上一个结果的处理，需要同类型分组
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) return '1'
  let arr = []
  return deep(1, n, r = '1')

  function deep(i, n, r) {
    arr = [[r[0]]]
    let str = ''

    //先把r字符串转数组,分组
    for (let j = 1; j < r.length; j++) {
      if (arr[arr.length - 1][0] === r[j]) { // 如果字符和数组最后一个组合里的文字相等
        arr[arr.length - 1].push(r[j])
      } else { //否则 push 一个新的数字
        arr.push([r[j]])
      }
    }

    // console.log('第',i,'次，参数：', r)
    // console.log('arr', arr)

    //再把数字转成数字描述
    arr.forEach(item => {
      str += (item.length + item[0])
    })
    // console.log('str', str)
    // return
    // 递归结束条件
    if (i === n - 1) return str
    i++
    return deep(i, n, str)

  }
};
// @lc code=end
const n = 14
console.log(countAndSay(n))