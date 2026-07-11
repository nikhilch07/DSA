
const threeSum = (arr) => {
    arr.sort((a,b) => a - b);
    console.log('SORTED ARRAY', arr);

    let result = [];

    for (let i = 0; i < arr.length - 2; i++){
        if(i > 0 && arr[i] == arr[i-1]) continue;
        let left = i + 1;
        let right = arr.length - 1;

        while(left < right){

            const sum = arr[i] + arr[left] + arr[right];
            if(sum == 0){
                result.push([arr[i], arr[left], arr[right]]);
                while( left < right && arr[left] == arr[left + 1]) left++;
                while( left < right && arr[right] == arr[right - 1]) right--;
                left++;
                right--;
            } else if(sum > 0){
                right--;
            } else {
                left++;
            }

        }

    }
    return result;
}

const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [-2, -2, -2, 0, 0, 2, 2]

console.log('THREE SUM', threeSum(nums1))
console.log('THREE SUM', threeSum(nums2))