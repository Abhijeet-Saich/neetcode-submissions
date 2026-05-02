class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        let top = cost.length;
        let memo = new Array(cost.length+1).fill(0);   //min cost to reach floor n

        function recur(n){

            if(n >= top) return 0;

            if(memo[n] != 0) return memo[n];

            let minCost = cost[n] + Math.min(recur(n+1), recur(n+2));

            memo[n] = minCost;
            return minCost;
        }


        function bottomUp(){
            let top = cost.length
            let memo = new Array(cost.length + 2).fill(0);

            for(let i = top-1; i >= 0; i--){
                memo[i] = cost[i] + Math.min(memo[i+1], memo[i+2]);
            }

            return Math.min(memo[0], memo[1]);
        }

        function constant(){

            let next1 = 0;
            let next2 = 0;

            for(let i = top-1; i >= 0; i--){
                let current = cost[i] + Math.min(next1, next2);

                next2 = next1;
                next1 = current;
            }

            return Math.min(next2, next1);
        }

        return constant();
        // return bottomUp();
        // return Math.min(recur(0), recur(1));
    }
}
