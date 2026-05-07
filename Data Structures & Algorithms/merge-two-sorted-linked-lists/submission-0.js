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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let newHd = new ListNode('NH', null);

        let mover = newHd;


        while(list1 && list2){

            if(list1.val <= list2.val){

                mover.next = list1;
                let temp = list1.next;  // add smaller node before
                list1.next = list2;

                list1 = temp;
            } else{

                mover.next = list2;
                let temp = list2.next;  // add smaller node before
                list2.next = list2;

                list2 = temp;
            }

            mover = mover.next;
        }

        if(!list1) mover.next = list2;
        if(!list2) mover.next = list1;

        return newHd.next;
    }
}
