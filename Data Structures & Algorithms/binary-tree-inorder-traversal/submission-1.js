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
    inorderTraversal(root) {

        if(!root) return [];

        let ans = [];

        // function inorder(node){
        //     if(node.left) inorder(node.left);
        //     ans.push(node.val);
        //     if(node.right) inorder(node.right);
        // }

        // inorder(root);


        // using stack

        let stack = [];
        let curr = root;

        while(curr ||stack.length){

            while(curr){
                stack.push(curr);
                curr = curr.left;
            }

            let node = stack.pop();
            ans.push(node.val);

            if(node.right) curr = node.right;
        }

        return ans;
    }
}
