/*
 * @Description: 28. 找出字符串中第一个匹配项的下标
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2024-01-22 17:04:41
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-23 09:48:14
 */

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

 

// 示例 1：

// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。
// 示例 2：

// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
// const haystack = "missioissippi", needle = "issip";
const haystack = "sadbutsad", needle = "sad";

// issis
var strStr = function(haystack, needle) {
    if ( !haystack || !needle) return -1
    let  res = -1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let curent = haystack.slice(i, i + needle.length);
            if (curent === needle) {
                res = i
                break
            }
        }
    }
    return res
};
console.log('输出strStr', strStr(haystack, needle) ) 