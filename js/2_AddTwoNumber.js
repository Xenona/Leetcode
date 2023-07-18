'use strict'

/*You are given two non-empty linked lists
representing two non-negative integers. 
The digits are stored in reverse order,
and each of their nodes contains a single
digit. Add the two numbers and return the 
sum as a linked list.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



var addTwoNumbers = function(l1, l2) {
    let l3 = res = null;
    let carry = 0;
    while (l1 || l2 || carry) {
      
        carry = (l1?.val || 0) + (l2?.val || 0) + carry;
      
        if (res) {
            l3.next = new ListNode(carry % 10, null); 
            l3 = l3.next;
        } else {
            l3 = res = new ListNode(carry % 10, null);
        };
      
        carry = carry > 9 ? 1 : 0;        
      
        l1 = l1?.next; 
        l2 = l2?.next;
    };
    return res;
};


// var addTwoNumbers = function(l1, l2) {
//     const res = new ListNode(0, null);
//     let l3 = res;
//     let c = 0;
//     l3.val = (l1.val || 0) + (l2.val || 0) + c;
//     c = Math.trunc(l3.val / 10);
//     l3.val %= 10;

//     l1 = l1?.next; 
//     l2 = l2?.next;
    
//     while (l1 || l2) {
//         l3.next = new ListNode(0, null);
//         l3 = l3.next;

//         l3.val = (l1?.val || 0) + (l2?.val || 0) + c;
//         c = Math.trunc(l3.val / 10);
//         l3.val %= 10;

//         l1 = l1?.next; 
//         l2 = l2?.next;
//     };
//     if (c === 1) {
//         l3.next = new ListNode(c, null);
//     };
//     return res;


// };