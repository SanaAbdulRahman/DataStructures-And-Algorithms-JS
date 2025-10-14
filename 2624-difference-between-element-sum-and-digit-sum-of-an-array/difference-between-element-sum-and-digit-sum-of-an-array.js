/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const n=nums.length;
    let elemSum=0;
    let digitSum=0;
    for(let i=0;i<n;i++){
        var numString=nums[i].toString()
       
        elemSum=elemSum+nums[i];
        for(let j=0;j<numString.length;j++){
            digitSum=digitSum+parseInt(numString[j])
                  }
           }
           
        return Math.abs(elemSum-digitSum);
};