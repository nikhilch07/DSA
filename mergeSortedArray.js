// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums2 into nums1 as one sorted array (or, more simply: given two separate sorted arrays, produce one merged sorted array).
// Example 1:
// Input: arr1 = [1,2,4], arr2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: arr1 = [1,2,3], arr2 = []
// Output: [1,2,3]

// Example 3:
// Input: arr1 = [], arr2 = [1]
// Output: [1]
// Constraints:

// 0 <= arr1.length, arr2.length <= 200
// -10^9 <= arr1[i], arr2[i] <= 10^9
// Both arrays are sorted in non-decreasing order

const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];
const arr3 = [1, 2, 3];
const arr4 = [];
const arr5 = [];
const arr6 = [1];


const mergeSortedArray = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  const combinedArrayLength = arr1.length + arr2.length;
  let result = [];
  while (result.length < combinedArrayLength) {
    if (p1 >= arr1.length) {
      result.push(arr2[p2]);
      p2++;
    } else if (p2 >= arr2.length) {
      result.push(arr1[p1]);
      p1++;
    } else {
      if (arr1[p1] <= arr2[p2]) {
        result.push(arr1[p1]);
        p1++;
      } else {
        result.push(arr2[p2]);
        p2++;
      }
    }
  }
  return result;
};

console.log("MERGE SORTED ARRAY", mergeSortedArray(arr1, arr2));
console.log("MERGE SORTED ARRAY1", mergeSortedArray(arr3, arr4));
console.log("MERGE SORTED ARRAY2", mergeSortedArray(arr5, arr6));

const mergeSortedArrayII = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;

  const result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }
  return result;
};


console.log("MERGE SORTED ARRAY USING WHILE LOOP", mergeSortedArrayII(arr1, arr2));
console.log("MERGE SORTED ARRAY1 USING WHULE LOOP", mergeSortedArrayII(arr3, arr4));
console.log("MERGE SORTED ARRAY2 USING WHILE LOOP", mergeSortedArrayII(arr5, arr6));
