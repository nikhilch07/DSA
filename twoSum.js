const twoSum = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
      const sum = nums[left] + nums[right];
      if( sum == target ) return [left, right];
      if(sum > target){
        right--;
      } else {
        left++;
      }
    }
  return 'target not found'
}

const nums = [2,7,11,15];
const target = 9;
const nums1 = [3, 4, 5, 6];
const target1 = 7;
const nums2 = [3, 2, 4];
const target2 = 6;
const nums3 = [3, 2, 8];
const target3 = 6;

console.log('TWO SUM', twoSum(nums, target))
console.log('TWO SUM1', twoSum(nums1, target1))
console.log('TWO SUM2', twoSum(nums2, target2))
console.log('TWO SUM3', twoSum(nums3, target3))