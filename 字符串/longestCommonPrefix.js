/*
 * @Description: 最长公共前缀
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2024-01-22 16:15:06
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-22 16:49:16
 */
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
// const strs = ["flower","flow","flight"]
const strs = ["ab", "ab", 'ac'];
function longestCommonPrefix (strs) {
    let str1 = strs[0];
    if (!strs)  return ''
    if (strs.length === 1) return strs[0]
    for (let i = 1; i < strs.length; i++) {
        let currentStr = strs[i];
        for (let j = 0; j < currentStr.length; j++) {
            if (currentStr === '') return ''
            if (currentStr.length < str1.length) {
                str1 = str1.slice(0, currentStr.length)
            }
            if (currentStr[j] != str1[j]) {
                str1 = str1.slice(0, j)
            }
        }
    }
    return str1;
};

longestCommonPrefix(strs)