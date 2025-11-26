/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let p=1;
    let j=0;
    for(let elm of arr){
        while(p!==elm){
            j++
            if(j===k)return p;

            p++;
        }
        if(p===elm){
            p++
        }
    }
    while(++j<k){
        p++
    }
return p;
};