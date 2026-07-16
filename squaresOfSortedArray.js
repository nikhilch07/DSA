// Problem 4: Squares of a Sorted Array
// Given a sorted array of integers (may include negatives), return an array of the squares of each number, sorted in ascending order.
// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]

const squaresOfSortedArray = (nums) => {
  let left = 0; let right = nums.length - 1;
  let result = new Array(nums.length).fill(0);
  let lastIndex = right;

  while(left <= right){
    const normalizedLeft = nums[left] * nums[left];
    const normalizedRight = nums[right] * nums[right];
    if(normalizedLeft < normalizedRight){
        result[lastIndex] = normalizedRight; 
        right--;
    } else {
        result[lastIndex] = normalizedLeft;
        left++;
    }
    lastIndex--;
  }
 return result;
}

const nums = [-4, -1, 0, 3, 10]
console.log('SQUARES OF SORTED ARRAY', squaresOfSortedArray(nums))