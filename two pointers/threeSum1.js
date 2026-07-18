
// 3sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0
// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
// Constraints:

// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

const threeSum = (nums) => {        
    let result = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if( i > 0 && nums[i] == nums[i-1]) continue;

        let j = i + 1;
        let k = nums.length - 1

        while( j < k ){
            const sum = nums[i] + nums[j] + nums[k];
            if(sum == 0 ){
                result.push([nums[i], nums[j], nums[k]])
                while( j < k && nums[j] == nums[j + 1]) j++;
                while( j < k && nums[k] == nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
}

const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [-2, -2, -2, 0, 0, 2, 2]

console.log('THREE SUM', threeSum(nums1))
console.log('THREE SUM', threeSum(nums2))