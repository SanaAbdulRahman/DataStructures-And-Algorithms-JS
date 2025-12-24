/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    let firstStep=1;
    let secondStep=2;
    let thirdStep=0
    for(let i=3;i<=n;i++){
        thirdStep=firstStep+secondStep
        firstStep=secondStep
        secondStep=thirdStep;
    }
    return thirdStep
};