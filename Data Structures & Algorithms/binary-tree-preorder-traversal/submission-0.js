/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {

        if(!root) return [];
        const ans = [];  // array to store visited nodes as per order

        function preOrder(node){

            ans.push(node.val);   // mark node visited

            if(node.left) preOrder(node.left);
            if(node.right) preOrder(node.right);
        }

        preOrder(root);

        return ans;
    }
}
