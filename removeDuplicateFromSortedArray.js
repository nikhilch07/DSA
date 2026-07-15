// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Return k, the number of unique elements. The first k elements of nums should hold the final result.
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Constraints:

// 1 <= nums.length <= 3 * 10^4
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order


const removeDuplicateFromSortedArray = (arr) => {

    let slow = 0; let fast = 1;
    let count = 0;
    
    while(fast < arr.length){
        console.log('No.of steps', count++);
        if(arr[slow] !== arr[fast]){
            slow++;
            arr[slow] = arr[fast];
            fast++;
        } else {
            fast++;
        }
    }
    return slow + 1;
}

const arr =  [0,0,1,1,1,2,2,3,3,4];
const arr1 = [1,1,2];
const arr2 = [1, 2, 2, 2, 2, 3]
console.log('REMOVE DUPLICATE FROM SORTED ARRAY', removeDuplicateFromSortedArray(arr));
console.log('REMOVE DUPLICATE FROM SORTED ARRAY1', removeDuplicateFromSortedArray(arr1));
console.log('REMOVE DUPLICATE FROM SORTED ARRAY2', removeDuplicateFromSortedArray(arr2));