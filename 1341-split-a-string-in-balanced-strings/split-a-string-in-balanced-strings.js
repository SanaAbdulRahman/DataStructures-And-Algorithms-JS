/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lCount=0,rCount=0, maxCount=0;

    for(let char of s){
        if(char==="L")lCount++;
        else rCount++;

        if(lCount===rCount) maxCount++
    }
    return maxCount;
}; 