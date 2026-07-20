//  Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces

const longestSubString = (str) => {

    let left = 0; let maxLength = 0;
    let seen = new Set();

    for(let right = 0; right < str.length; right++){
       
        while(seen.has(str[right])){
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right])
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

}

const str = "abcabcbb";
console.log('LONGEST SUBSTRING', longestSubString(str))

const str1 = "bbbbb";
console.log('LONGEST SUBSTRING1', longestSubString(str1))

const str2 = "pwwkew";
console.log('LONGEST SUBSTRING2', longestSubString(str2))
