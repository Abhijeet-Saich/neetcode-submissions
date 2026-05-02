class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let memo = new Array(n+1).fill(-1);  //no of ways we can reach to top from 'kth' stair

        // function recur(k){

        //     if(k == n) return 1;   //reached at destination
        //     if(k > n ) return 0;

        //     if(memo[k] != -1) return memo[k];

        //     let jump1 = recur(k + 1);
        //     let jump2 = recur(k + 2);

        //     memo[k] = jump1 + jump2;

        //     return memo[k];
        // }

        // function bottomUp(n){
        //     memo[n] = 1;

        //     for(let i = n-1; i >= 0; i--){
        //         let jump1 = memo[i+1];
        //         let jump2 = (i+2 <= n) ? memo[i+2] : 0;

        //         memo[i] = jump1 + jump2;
        //     }

        //     return memo[0];
        // }

        function constant(n){

            let next1 = 1;
            let next2 = 0;

            for(let i = n-1; i >= 0 ; i--){
                let current = next1 + next2;

                next2 = next1;
                next1 = current;
            }

            return next1
        }

        // return recur(0)
        // return bottomUp(n)
        return constant(n)
    }
}
