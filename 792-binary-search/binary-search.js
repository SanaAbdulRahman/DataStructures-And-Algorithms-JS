/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n=nums.length
    if (n===0){
        return -1
    }
    let left=0;
    let right=n-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        console.log("mid",mid);
        if(target===nums[mid])
        return mid
        else if(target < nums[mid]){
            right=mid-1
        }
        else if(target>nums[mid]){
            left=mid+1
        }
    }
    return -1;
};