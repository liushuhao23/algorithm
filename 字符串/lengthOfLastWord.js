/*
 * @Description: 最后一个单词的长度
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2024-01-23 09:49:35
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-23 10:21:50
 */

// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

 

// 示例 1：

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。
// 示例 2：

// 输入：s = "   fly me   to   the moon  "
// 输出：4
// 解释：最后一个单词是“moon”，长度为4。
// 示例 3：

// 输入：s = "luffy is still joyboy" s= ' a ' s = 'a ' s= ' a' s= 'a'
// 输出：6
// 解释：最后一个单词是长度为6的“joyboy”。
const str = "alll "
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    while(end >= 0 && s[end] == ' ') end--;
    console.log('输出', end )
    if(end < 0) return 0;
    let start = end;
    while(start >= 0 && s[start] != ' ') start--;
    console.log('输出', start )
    return end - start;
    
};
console.log('输出', lengthOfLastWord(str)); 
