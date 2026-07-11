const threeSum = (arr) => {
    let result = [];
    const sortedArray = arr.sort((a,b) => a - b);
    console.log('SORTED ARRAY', sortedArray);

    for(let i = 0; i < arr.length - 2; i++){
        
        let left = i + 1;
        let right = arr.length - 1
        if( i > 0 && arr[i] == arr[i-1]) i++;
        while(left < right){
            const sum  = arr[i] + arr[left] + arr[right]
            if(sum == 0){
                result.push([arr[i], arr[left], arr[right]]);
                while(left < right  && arr[left] == arr[left + 1]) left++;
                while(left < right && arr[right] == arr[right - 1]) right--;
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


// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

const nums = [-1, 0, 1, 2, -1, -4];

console.log('THREE SUM', threeSum(nums))