'use strict';

/*Given an array of integers nums and
an integer target, return indices of
the two numbers such that they add
up to target*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function(nums, target) {
    let numMap = new Map();

    for (let i = 0; i<nums.length; i++) {
        if (numMap.has(nums[i])) {
            return [numMap.get(nums[i]), i];
        };
        numMap.set(target - nums[i], i);
    };
};
    


// var twoSum = function(nums, target) {

//     let init = [...nums];
//     nums = nums.sort((a, b) => a-b);
//     let i = 0;
//     let j = nums.length-1;
//     while (true) {
//         let sum = nums[i] + nums[j];
//         if (sum === target) break;
//         if (sum > target) {
//             j--;
//         } else { 
//             i++;
//         };
//     };

//     let l = init.findIndex(e => e === nums[i]);
//     console.log(l)
//     for (let k = init.length-1; k >= 0; k--) {
//         console.log()
//         if (init[k] === nums[j]) {
//             console.log(k)
//             return [l, k] }
//     }
// };
