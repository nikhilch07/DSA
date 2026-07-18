// 8. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2

const sortColors = (nums) => {

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid <= high){
        let temp;
        switch(nums[mid]){
            case 0 :
            temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
            break;

            case 1 :
                mid++;
                break;
            
            case 2 :
                temp = nums[high];
                nums[high] = nums[mid];
                nums[mid] = temp;
                high--; 
                break;   
        }
    }
   return nums
}
const nums1 = [2,0,2,1,1,0];
const nums2 = [2,0,1];

// console.log('SORT COLORS1', sortColors(nums1))
// console.log('SORT COLORS2', sortColors(nums2))

const removeDuplicate = (nums) => {

    let slow = 0; fast = 1;
    while(fast < nums.length){
        if(nums[slow] != nums[fast]){
            slow++;
            nums[slow] = nums[fast];
            fast++;
        } else {
            fast++;
        }
    }
    return slow + 1;
}

const nums = [0,0,1,1,1,2,2,3,3,4];
const nums3 = [1,1,2];

console.log('REMOVE DUPLICATES', removeDuplicate(nums));
console.log('REMOVE DUPLICATES 1', removeDuplicate(nums3));
