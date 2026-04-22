/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*sort the array and use 2 pointer method but return the exact indices of the original array*/
    var array=nums.map((num,index)=>[num,index]);
console.log("array",array);
    array.sort((a,b)=>a[0]-b[0]);
    console.log("sorted array",array);

    let left=0;
    let right=nums.length-1
    while(left<right){
    
    let sum=array[left][0]+array[right][0];

    if(sum===target){
        return [array[left][1],array[right][1]];
    }
    else if(sum<target)
    left++;

    else if(sum>target)
    right--
    }
return []
};