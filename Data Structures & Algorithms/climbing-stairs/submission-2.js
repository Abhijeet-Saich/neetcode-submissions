class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let memo = new Array(n+1).fill(-1);  //no of ways we can reach to top from 'kth' stair

        function recur(k){

            if(k == n) return 1;   //reached at destination
            if(k > n ) return 0;

            if(memo[k] != -1) return memo[k];

            let jump1 = recur(k + 1);
            let jump2 = recur(k + 2);

            memo[k] = jump1 + jump2;

            return memo[k];
        }


        return recur(0)
    }
}
