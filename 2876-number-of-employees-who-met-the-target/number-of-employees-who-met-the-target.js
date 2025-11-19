/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let n=hours.length-1;
    let result=0;

    for(let i=0;i<=n;i++){
if(hours[i]>=target){
    result=result+1;
}

    }
    return result;
};