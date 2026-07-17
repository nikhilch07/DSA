// Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The max area of water the container can contain is between index 1 and index 8 (heights 8 and 7), forming a container of area 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
// Constraints:

// n == height.length
// 2 <= n <= 10^5
// 0 <= height[i] <= 10^4

const containerWithMostWater = (heightArr) => {

    let left = 0; let right = heightArr.length - 1;
    let best = 0;

    while(left < right){
        const arr = Math.min(heightArr[left], heightArr[right]) * (right - left);
        best = Math.max(arr, best);
        if(heightArr[left] < heightArr[right]) left++
        else right--;
    }
    return best;
}

const arr1 = [1,8,6,2,5,4,8,3,7];
const arr2 = [1,1];
const arr3 = [1,8,6,2,5]
console.log('CONTAINER WITH MOST WATER1', containerWithMostWater(arr1))
console.log('CONTAINER WITH MOST WATER2', containerWithMostWater(arr2))
console.log('CONTAINER WITH MOST WATER3', containerWithMostWater(arr3))