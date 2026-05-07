/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        if(!head) return null;

        let x = null;
        let y = head;

        if(!y) return x;

        while(y.next != null){
            let temp = y.next;   //save next

            y.next = x;  // reversal

            x = y;    // move ahead
            y = temp;
        }

        y.next = x;

        return y;
    }
}
