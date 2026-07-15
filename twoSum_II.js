
// Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.
// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Constraints:

// 2 <= numbers.length <= 3 * 10^4
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order
// -1000 <= target <= 1000

const twoSum_II = (nums, target) => {
    let map = new Map();
    if(!nums.length) return [];
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement) + 1, i + 1]
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums = [2,7,11,15];
const target = 9;
const nums1 = [2,3,4];
const target1 = 6;
const nums2 = [-1,0];
const target2 = -1;


console.log('TWO SUM', twoSum_II(nums, target))
console.log('TWO SUM1', twoSum_II(nums1, target1))
console.log('TWO SUM2', twoSum_II(nums2, target2))
