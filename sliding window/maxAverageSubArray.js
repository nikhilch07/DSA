// 1. Maximum Average Subarray I
// 
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10^-5 will be accepted.Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12-5-6+50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000Constraints:

// n == nums.length
// 1 <= k <= n <= 10^5
// -10^4 <= nums[i] <= 10^4

const maxAverageSubArray = (arr, k) => {
 
    let best = -Infinity;
    let sum = 0;

    for(let i = 0; i < k; i++){
        sum = sum + arr[i];
    }
     best = sum;

    for(let i = k; i < arr.length; i++){
       sum = sum - arr[i - k] + arr[i];
       best = Math.max(sum, best);
    }

    return best/k;

}

const arr  = [1,12,-5,-6,50,3]; const k = 4;
const arr1 = [5]; const l = 1; 
const nums = [4, 2, 1, 3]; const m = 4
const nums1 = [-1, -12, -5, -6, -50, -3]; const n = 4
const nums2 = [7, 7, 7, 7, 7], k2 = 3  // expected = 7.0
console.log('MAXIMUM AVERAGE SUB ARRAY', maxAverageSubArray(arr, k))
console.log('MAXIMUM AVERAGE SUB ARRAY1', maxAverageSubArray(arr1, l))
console.log('MAXIMUM AVERAGE SUB ARRAY2', maxAverageSubArray(nums, m))
console.log('MAXIMUM AVERAGE SUB ARRAY3', maxAverageSubArray(nums1, n))
console.log('MAXIMUM AVERAGE SUB ARRAY3', maxAverageSubArray(nums2, k2))

