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
                list1 = list1.next;
            } else{
                mover.next = list2;
                list2 =  list2.next;
            }

            mover = mover.next;
        }

        mover.next = list2 || list1;

        return newHd.next;
    }
}
