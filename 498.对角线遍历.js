/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  //思路: 取出对角线的数组，如[1],[2,4],[3,5,7],[6,8],[9]
  // 只需要循环矩阵上边和右侧边的元素，以它们为起始点，向下左方向取数
  const M = mat.length  // 矩阵高度
  const N = mat[0].length // 矩阵宽度

  // 获取边沿数组下标
  const topAndright = []
  const resultMat = []

  for (let top = 0; top < N; top++) {
    topAndright.push([0, top])
  }
  for (let right = 1; right < M; right++) {
    topAndright.push([right, N - 1])
  }

  // 获取对角数组
  topAndright.forEach((item, index) => {
    // 设定个 flag，每次遍历开始为 true，如果碰到边界，则返回 fasle
    let flag = true
    let tmpIndex = item // 临时下标，其实也可以用临时数组的最后一个
    let tpmArr = []
    // 至少执行一次
    

    while (flag) {
      if (mat[tmpIndex[0]] !== undefined && mat[tmpIndex[0]][tmpIndex[1]]!== undefined) {
        tpmArr.push(mat[tmpIndex[0]][tmpIndex[1]])
        tmpIndex[0]++
        tmpIndex[1]--
      } else {
        flag = false
      }
    }

    // 如果为偶数，则按顺序push，奇数则翻转后再push
    tpmArr = index & 1 ? tpmArr : tpmArr.reverse()
    tpmArr.forEach(subItem => {
      resultMat.push(subItem)
    })
  })

  return resultMat
};
// @lc code=end

// var mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var mat = [[2,5],[8,4],[0,-1]]

// 输出：[1,2,4,7,5,3,6,8,9]

console.log(findDiagonalOrder(mat))