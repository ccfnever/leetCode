/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 可以用 hash，验证是否重复
  // 循环每个格子，然后遍历列和行
  // 因为 9 x 9 固定，所以 length 就直接是 9

  for (let i = 0; i < 9; i++) {
    let rowHash = {}
    let colHash = {}

    let boardHash = {}
    for (let j = 0; j < 9; j++) {
      if (rowHash[board[i][j]]) return false
      if (colHash[board[j][i]]) return false


      if (board[i][j] !== '.') rowHash[board[i][j]] = board[i][j]
      if (board[j][i] !== '.') colHash[board[j][i]] = board[j][i]

      // 小矩阵的下标
      const rowIndex = (3 * Math.floor(i / 3)) + Math.floor(j / 3)
      const colIndex = 3 * Math.floor(i % 3) + Math.floor(j % 3)

      if (boardHash[board[rowIndex][colIndex]]) return false
      if (board[rowIndex][colIndex] !== '.') boardHash[board[rowIndex][colIndex]] = board[rowIndex][colIndex]

    }
  }

  return true
};
// @lc code=end

const board =
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , [".", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(isValidSudoku(board))