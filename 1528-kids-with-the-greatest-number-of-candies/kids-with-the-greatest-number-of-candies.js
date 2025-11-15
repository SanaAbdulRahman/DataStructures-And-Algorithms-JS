/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result=[];
    const n= candies.length;
    const max=Math.max(...candies);
    console.log("max",max);
    for(let i=0;i<n;i++){
        const val=candies[i]+extraCandies;

        result.push(val >=max? true :false)
    }
    return result;
};