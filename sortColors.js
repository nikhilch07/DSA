const sortColors = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
   let temp;
    switch (arr[mid]) {
      case 0:
        temp = arr[low];
        arr[low] = arr[mid];
        arr[mid] = temp;
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        temp = arr[high];
        arr[high] = arr[mid];
        arr[mid] = temp;
        high--; 
        break;
    }
  }
  return arr;
};

const nums = [2,0,1];
console.log("SORT COLORS", sortColors(nums));

// Input: nums = [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]
