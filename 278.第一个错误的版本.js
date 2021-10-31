/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 * 思路:
 * 版本列表是一个数组，错误版本之后全部都是错，可以理解有序数字数字，查数字下标。
 * 用二分法                                                                                                                                      
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 0
        let hight = n

        while (low < hight) {
            let mid = Math.floor(low + (low + hight) / 2)
            if (isBadVersion(mid)) {
                hight = mid
            } else {
                low = mid + 1
            }
        }

        return low
    };
};
// @lc code=end

