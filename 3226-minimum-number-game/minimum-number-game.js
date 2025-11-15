/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const arr=[];
     nums = nums.sort((a,b)=>b-a)
while(nums.length){
    let minAlice=nums.pop();
    let minBob=nums.pop();

    arr.push(minBob);
    arr.push(minAlice);
}
  return arr;
   
};