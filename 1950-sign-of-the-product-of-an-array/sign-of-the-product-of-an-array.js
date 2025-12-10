/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let value=1;
    for(let i=0;i<nums.length;i++){
        value=value*nums[i];
    }
    if(value>0){
        return 1;
    }else if(value<0){
        return -1;
    }
    else {
        return 0;
        }
};